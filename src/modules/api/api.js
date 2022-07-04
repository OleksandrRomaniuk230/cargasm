import axios from 'axios';
import Cookie from 'js-cookie';
import router from "@/routes";

import apiEvents from './methods/event';
import apiMedias from './methods/medias';
import apiAuth from './methods/auth';

import ValidationErrors from '@/services/exeptions/ValidationErrors'

let client = axios.create({
    baseURL:'http://cargasm.test/api/v1/'
    // withCredentials: true
  })

  export default {
    cleanRestApi(obj) {
      for (const propName in obj) {
        if (!obj.hasOwnProperty(propName)) continue;
      }
    },
    setupRestApi(store, router) {
      client.interceptors.request.use(async config => {
        config.headers.common['Cache-Control'] = 'no-cache';
        config.headers.common['Pragma'] = 'no-cache';
        config.headers.common['Expires'] = '0';
        if (config.method === 'put' || config.method === 'post') {
          this.cleanRestApi(config.data);
        }
       
        if (Cookie.get('access_token')) {
       
          config.headers.common['Authorization'] = `Bearer ${Cookie.get('access_token')}`;
        }
        return config;
      },
    
       async error => {
        return Promise.reject(error);
      });
  
      client.interceptors.response.use(async response => {
        return response;
      }, async (error) => {
  
        let code = error.response && error.response.status ? error.response.status : 500;
  
        if (code === 422) {
          return Promise.reject(new ValidationErrors(error.response));
        }
  
        if (code === 401) {
          return Promise.reject({
            message: 'Authorized fail'
          });
        }
  
        if (code === 404) {
        
        }
  
        if (code === 500) {
          // router.push('/500');
        }
  
        return Promise.reject(error);
      });
    },
    install(Vue, store, router) {
      this.app = Vue.prototype;
      this.setupRestApi(store, router);
      const repositories = {
        event: apiEvents(client),
        medias: apiMedias(client),
        auth: apiAuth(client),
      };
  
      Vue.prototype.$api = repositories;
      store.$api = repositories;
    
    },
  }
  