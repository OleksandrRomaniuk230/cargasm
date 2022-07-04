
import auth from '../store/auth' 
import route from '../routes'

export default function () {
    if (!auth.state.access_token) {
     return route.push({ path: '/login' ,redirect: { name: 'login' }} )
   
    }
  }
  