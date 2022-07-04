<template>
  <div class="event">
    <div class="container">
      <div class="event__wrapper">
        <AppNavbar />
        <main class="event-page">
          <section>
            <h3 class="event__subtitle">
              {{ event.category }} • {{ event.age }}
              <router-link
                :to="{
                  name: 'settingsId',
                  params: { id: event.id, slug: event.slug },
                }"
              >
                <svg
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                    fill="#333333"
                  />
                </svg>
              </router-link>
            </h3>
            <h1 class="event__title">
              {{ event.title }}
            </h1>
            <div class="event__user">
              <div class="event__user-wrapper">
                <img
                  :src="`${event.author.main_photo.avatar}`"
                  class="event__user-avatar"
                  alt=""
                />
                <img
                  v-if="event.coauthor"
                  :src="`${event.coauthor}`"
                  class="event__user-avatar_under"
                  alt=""
                />
              </div>
              <div class="event__user-info">
                <p class="event__user-name">
                  <span>{{ event.author.name }}</span
                  ><span></span>
                </p>
                <p class="event__user-date">{{ formatData }}</p>
              </div>
            </div>
            <div v-if="event.dates_continuous" class="event__schedule-title">
              <span
                >{{ moment(event.dates.date.to).format("DD") }} -
                {{ moment(event.dates.date.from).format("DD MMMM") }}
              </span>
              <span>
                {{ moment(event.dates.date.to).format("DD MMMM") }}
                {{ event.dates.time.to }} -
                {{ moment(event.dates.date.from).format("DD MMMM") }}
                {{ event.dates.time.from }}
              </span>
            </div>
            <div
              v-else-if="event.dates.date.to === event.dates.date.from"
              class="event__schedule-title"
            >
              <span>
                {{ moment(event.dates.date.full).format("DD MMMM") }}</span
              >
              <span>
                <span>{{ weekDay }}</span> {{ event.dates.time.from }} -
                {{ event.dates.time.to }}</span
              >
            </div>
            <div v-else-if="dayIdentical" class="event__schedule-title">
              <span>
                {{ moment(event.dates.date.from).format("DD") }} -
                {{ moment(event.dates.date.to).format("DD MMMM") }}
              </span>
              <span>
                <span>Ежедневно</span> {{ event.dates.time.from }} -
                {{ event.dates.time.to }}</span
              >
            </div>
            <div v-else-if="!dayIdentical" class="event__schedule-title">
              <span>
                {{ moment(event.dates.date.from).format("DD") }} -
                {{ moment(event.dates.date.to).format("DD MMMM") }}
              </span>
              <span>
                {{ event.dates.time.from }} - {{ event.dates.time.to }}</span
              >
            </div>
            <ul v-if="!dayIdentical && activeScedule" class="event__schedule">
              <li
                v-for="(item, index) in event.dates.items"
                :key="index"
                class="event__item"
              >
                <span class="event__item-date">{{ item.day }}</span>
                <span v-if="item.time.from" class="event__item-time">
                  <span>
                    {{
                      weekDayItem(
                        new Date(
                          new Date(event.dates.date.from).valueOf() +
                            1000 * 3600 * 24 * index
                        )
                      )
                    }}
                  </span>
                  {{ item.time.from }} – {{ item.time.from }}</span
                >
              </li>
            </ul>
            <button
              @click="activeScedule = !activeScedule"
              v-if="!dayIdentical"
              class="event__schedule-btn"
            >
              Скрыть расписание
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="{ active: activeScedule }"
              >
                <path
                  d="M1 5L5 1L9 5"
                  stroke="#E62128"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="event__gallery">
              <img
                :src="`${event.main_photo.avatar}`"
                class="event__gallery-img_main"
                alt=""
              />
              <div v-if="event.photos.length" class="event__gallery-wrapper">
                <img
                  :src="`${event.photos[0].url}`"
                  class="event__gallery-img"
                  alt=""
                />
                <div v-if="event.photos[1]" class="event__button-wrapper">
                  <img
                    :src="`${event.photos[1].url}`"
                    class="event__gallery-img"
                    alt=""
                  />
                  <button v-if="isBtn" @click="getImages">
                    + {{ event.photos.length - 1 }} еще
                  </button>
                </div>
              </div>
              <div
                v-if="!isBtn && event.photos.length"
                class="event__img-wrapper"
              >
                <img
                  v-for="(images, index) in event.photos.length - 2"
                  :key="index"
                  :src="`${event.photos[index + 2].url}`"
                  class="event__gallery-img"
                  alt=""
                />
              </div>
            </div>
            <swiper
              :loop="false"
              :pagination="true"
              :spaceBetween="15"
              :breakpoints="swiperOptions.breakpoints"
              class="swiper event__swipper_media"
            >
              <swiper-slide v-for="n in 5" :key="n">
                <img
                  :src="getImageUrl(29 + n)"
                  width="100%"
                  height="360"
                  blank="true"
                  class="swiper-img"
                />
              </swiper-slide>
            </swiper>
            <p v-html="event.descr" class="event__text"></p>
          </section>
          <section class="event__location">
            <h3 class="event__title_default">Место проведения</h3>
            <app-map />
            <p class="event__text">
              {{ event.address }}
            </p>
            <button class="default__map-btn_media">
              Проложить маршрут
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.90993 5.08001C8.68993 5.86001 8.68993 7.12001 7.90993 7.90001C7.11993 8.68001 5.85993 8.68001 5.07993 7.90001C4.28993 7.11001 4.28993 5.85001 5.07893 5.07001C5.85893 4.28001 7.11893 4.28001 7.89893 5.06901"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.2297 18.5H8.61975C7.15975 18.5 5.98975 17.157 5.98975 15.5V15.49C5.98975 13.83 7.15975 12.49 8.60975 12.49H15.3497C16.7997 12.49 17.9697 11.147 17.9697 9.49002C17.9697 7.83002 16.7897 6.48802 15.3397 6.49002H11.2197"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.3397 20.684L19.2197 18.974C19.5797 18.754 19.5797 18.234 19.2197 18.024L16.3297 16.314C15.9497 16.094 15.4897 16.354 15.4897 16.784V20.194C15.4897 20.624 15.9497 20.884 16.3297 20.664L16.3397 20.684Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </section>
          <section class="event__conditions">
            <h3 class="event__title_default">Условия события</h3>
            <div class="event__conditions-info">
              <div class="event__conditions-item">
                <span class="event__conditions-subtitle"
                  >Количество участников:</span
                >
                <span class="event__conditions-title"
                  >{{ event.count_seats }} человек</span
                >
              </div>
              <div class="event__conditions-item">
                <span class="event__conditions-subtitle">Возраст:</span>
                <span class="event__conditions-title">{{ event.age }}</span>
              </div>
              <div class="event__conditions-item">
                <span class="event__conditions-subtitle">Пол:</span>
                <span class="event__conditions-title">{{ event.sex }}</span>
              </div>
            </div>
          </section>
          <section v-if="event.users.length" class="event__users">
            <h3 class="event__title_default">Участники</h3>
            <div class="event__users-list">
              <a v-for="(user, index) in event.users" :key="index" href="#">
                <div class="event__users-item">
                  <img
                    :src="`${user.main_photo.avatar}`"
                    class="event__img"
                    alt=""
                  />
                  {{ user.name }}
                </div>
              </a>
            </div>
            <div class="event__buttons-wrapper">
              <button class="default-button default-button__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.944 19H5.056C4.466 19 4 18.52 4 17.94V10.55C4 9.95999 4.47 9.48999 5.056 9.48999H6.944C7.524 9.48999 8 9.95999 8 10.54V17.92C8 18.5 7.52 18.97 6.944 18.97V19Z"
                    stroke="#333333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.99994 10.57L11.6399 5.81904C12.3099 4.92904 13.6399 4.91204 14.3499 5.76904C14.6099 6.08904 14.7499 6.48904 14.7499 6.91004V10.18H17.8459C18.4459 10.18 19.0059 10.48 19.3359 10.97L19.6559 11.46C19.9459 11.9 20.0359 12.45 19.8859 12.95L18.5259 17.67C18.2959 18.44 17.5959 18.97 16.7959 18.97H10.4999C9.99994 18.97 9.51994 18.76 9.17994 18.39L7.93994 17.06"
                    stroke="#333333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="default-button default-button__icon">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.69995 0.99999H12.3C13.4 0.99999 14.3 1.89499 14.3 2.99999V19L7.99995 15.72L1.69995 18.99V2.98999C1.69995 1.88499 2.58995 0.98999 3.69995 0.98999V0.99999Z"
                    stroke="#333333"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="default-button default-button__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 14.329C8.406 14.329 4.501 16.692 3 20V18.993C3 12.977 7.421 8.07 13 7.702V3L21 11L13 19V14.333"
                    stroke="#323232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="default-button__red event-button__red">
                Я иду
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
        },
      },
      event: {},
      isBtn: true,
      dayIdentical: true,
      activeScedule: false,
    };
  },
  computed: {
    formatData(e) {
      return moment(e.created_at).format("DD MMMM");
    },
    weekDay() {
      //let now = new Date();
      let today = new Date(new Date().valueOf() + 1000 * 3600 * 24);
      let other = new Date(this.event.dates.date.full);
      if (other < today - 86400000 || other > today - 86400000) {
        return (
          moment(other).format("dddd")[0].toUpperCase() +
          moment(other).format("dddd").slice(1)
        );
      } else if (other < today) {
        return "Вчера";
      } else {
        return "Сегодня";
      }
    },
  },
  async created() {
    try {
      let { data } = await this.$api.event.onceEvent(this.$route.params.id);
      this.event = data.event;
    } catch (e) {
      console.log(e.message);
    }
    this.event.dates.items.forEach((element) => {
      if (
        element.time.to !== this.event.dates.time.to &&
        element.time.from !== this.event.dates.time.from
      ) {
        this.dayIdentical = false;
      }
    });
  },

  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`;
    },
    moment(date) {
      return moment(date);
    },
    getImages() {
      this.isBtn = false;
    },
    weekDayItem(date) {
      console;
      return (
        moment(date).format("dddd")[0].toUpperCase() +
        moment(date).format("dddd").slice(1)
      );
    },
  },
};
</script>