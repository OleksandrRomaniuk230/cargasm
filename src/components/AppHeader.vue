<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <button class="header__button-burger" @click="toggleBurger">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            clas
          >
            <path
              d="M4 6H20"
              stroke="#E62128"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H16"
              stroke="#E62128"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#E62128"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <nav>
          <ul class="header__list_media" v-if="burger">
            <li class="header__item">
              <router-link to="/" class="header__link">Магазин</router-link>
            </li>
            <li class="header__item">
              <router-link to="/" class="header__link">События</router-link>
            </li>
            <li class="header__item">
              <router-link to="/" class="header__link">Новости</router-link>
            </li>
            <li class="header__item">
              <router-link to="/" class="header__link">Блог</router-link>
            </li>
            <li class="header__item">
              <router-link to="/" class="header__link">Поиск СТО </router-link>
            </li>
          </ul>
        </nav>
        <router-link to="/"
          ><img src="../static/logo.svg" class="header__logo" alt=""
        /></router-link>
        <div class="header__icon-wrapper_media">
          <a href="#"><img src="../static/bell.svg" alt="" /></a>
          <img src="../static/user.svg" class="header__user-icon" alt="" />
        </div>
        <nav>
          <ul class="header__list">
            <li class="header__item">
              <router-link to="/" class="header__link">Магазин</router-link>
            </li>
            <li class="header__item">
              <router-link to="/" class="header__link">События</router-link>
            </li>
            <li class="header__item">
              <router-link to="/" class="header__link">Новости</router-link>
            </li>
            <li class="header__item">
              <router-link to="/" class="header__link">Блог</router-link>
            </li>
            <li class="header__item">
              <router-link to="/" class="header__link">Поиск СТО </router-link>
            </li>
          </ul>
        </nav>
        <div class="header__wrapper-block">
          <div class="header__search-wrapper">
            <img
              src="../static/search.svg"
              class="header__search-icon"
              alt=""
            />
            <input
              v-model="message"
              class="header__search"
              placeholder="Проверьте статус заказа"
            />
          </div>
          <ul class="header__icon-list">
            <li>
              <a href="#"><img src="../static/heart.svg" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="../static/message.svg" alt="" /></a>
            </li>
            <li>
              <a href="#"><img src="../static/bell.svg" alt="" /></a>
            </li>
          </ul>
          <div>
            <button @click="openMenu = !openMenu" class="header__user-wrapper">
              <img src="../static/user.svg" class="header__user-icon" alt="" />
              <img
                src="../static/vector.svg"
                class="header__user-icon_vector"
                 :class="{ active: openMenu}"
                alt=""
              />
            </button>
            <ul v-if="openMenu" class="header__list_user">
              <li class="header__item">
                <button @click="logOut" class="header__link">Вийти</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      burger: false,
      openMenu: false,
    };
  },
  methods: {
    toggleBurger() {
      this.burger = !this.burger;
    },
   async logOut(){
       try {
      let data = await this.$store.dispatch('auth/logout');
         this.$router.push({ path: '/login' })
    } catch (e) {
      console.log(e);
    }
    }
  },
};
</script>