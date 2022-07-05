<template>
  <main class="event">
    <section class="event__swipper">
      <div class="container">
        <div class="event__swipper-header">
          <h1 class="event-title">События</h1>
          <div class="event__button-wrapper">
            <button class="default-button">СЕГОДНЯ</button>
            <button class="default-button">НА ЭТОЙ НЕДЕЛЕ</button>
            <button class="default-button">В ВЫХОДНЫЕ</button>
            <button class="default-button default-button__icon">
              <img
                src="../static/map.svg"
                class="event__map-icon"
                alt=""
              /></button
            ><button class="default-button default-button__icon">
              <img
                src="../static/setting.svg"
                class="event__setting-icon"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-container">
        <swiper
          :loop="false"
          :spaceBetween="27"
          :pagination="true"
          :navigation="true"
          :breakpoints="swiperOptions.breakpoints"
          v-if="sliderOptions"
          class="swiper"
        >
          <swiper-slide v-for="(option, index) in sliderOptions" :key="index">
            <router-link
              :to="{
                name: 'eventsId',
                params: { id: option.slug, slug: option.slug },
              }"
            >
              <img
                :src="getImageUrl(29 + index)"
                width="100%"
                height="360"
                blank="true"
                class="swiper-img"
              />
              <div class="event__swiper-header">
                <div class="event__swiper-user">
                  <img src="../static/card-user.png" alt="" />
                  <span class="event__swiper-user_title">{{
                    option.author.name
                  }}</span>
                  <div class="event__swiper-user_flag">
                    <span class="event__swiper-user_flag"
                      >Идет сейчас / еще 6 дней</span
                    >
                  </div>
                </div>
              </div>
              <div class="event__swiper-footer">
                <p class="text-muted">
                  <span>{{ option.category }} </span> •
                  <span>{{ option.age }}</span>
                </p>
                <h2 class="event__swiper-title">
                  {{ option.announce }}
                </h2>
                <p class="text-muted">
                  {{ option.address }}
                </p>

                <div class="event__swiper-info">
                  <div class="event__swiper-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      @click="addLike(option)"
                    >
                      <path
                        d="M6.944 19H5.056C4.466 19 4 18.52 4 17.94V10.55C4 9.95999 4.47 9.48999 5.056 9.48999H6.944C7.524 9.48999 8 9.95999 8 10.54V17.92C8 18.5 7.52 18.97 6.944 18.97V19Z"
                        stroke="#FFFFFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      
                      <path
                        d="M7.99994 10.57L11.6399 5.81904C12.3099 4.92904 13.6399 4.91204 14.3499 5.76904C14.6099 6.08904 14.7499 6.48904 14.7499 6.91004V10.18H17.8459C18.4459 10.18 19.0059 10.48 19.3359 10.97L19.6559 11.46C19.9459 11.9 20.0359 12.45 19.8859 12.95L18.5259 17.67C18.2959 18.44 17.5959 18.97 16.7959 18.97H10.4999C9.99994 18.97 9.51994 18.76 9.17994 18.39L7.93994 17.06"
                        stroke="#FFFFFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>{{ option.likes_count }}</span>
                  </div>
                  <div class="event__swiper-icon">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 15H16C17.657 15 19 13.657 19 12V4C19 2.343 17.657 1 16 1H4C2.343 1 1 2.343 1 4V12C1 13.657 2.343 15 4 15H5.5V18L10 15Z"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>{{ option.comments_count }}</span>
                  </div>
                  <div class="event__swiper-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 18C3 15.79 4.79 14 7 14H11C13.2 14 15 15.79 15 18"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 4.65088C17.38 4.65088 18.5 5.76088 18.5 7.15088C18.5 8.53088 17.38 9.65088 16 9.65088"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.4 4.98992C12.72 6.30992 12.72 8.46992 11.4 9.78992C10.07 11.1099 7.91003 11.1099 6.59003 9.78992C5.26003 8.45992 5.26003 6.29992 6.59003 4.97992C7.91003 3.64992 10.07 3.64992 11.39 4.97992"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 13C19.2 13 21 14.79 21 17"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p>
                      <span>{{ option.users.length }}</span
                      >/<span>{{ option.dates_count }}</span>
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="event__swiper-icon_bookmark"
                  >
                    <path
                      d="M3.69995 0.99999H12.3C13.4 0.99999 14.3 1.89499 14.3 2.99999V19L7.99995 15.72L1.69995 18.99V2.98999C1.69995 1.88499 2.58995 0.98999 3.69995 0.98999V0.99999Z"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section>
      <div class="container">
        <b-tabs pills class="event__tabs">
          <b-tab title="Tab 1" active>
            <template #title>
              <img src="../static/mailbox.svg" alt="" /> Активные
            </template>

            <div class="event__cards-wrapper">
              <b-card
                v-for="(event, index) in events"
                :key="index"
                class="event__card"
              >
                <router-link
                  :to="{
                    name: 'eventsId',
                    params: { id: event.slug, slug: event.slug },
                  }"
                >
                  <div class="event__card-header">
                    <div class="event__card-user">
                      <img
                        :src="`${event.author.main_photo.avatar}`"
                        class="event__user-img"
                        alt=""
                      />
                      <span class="event__card-user_title">{{
                        event.author.name
                      }}</span>
                      <div
                        class="event__card-user_flag"
                        :class="[
                          event.status === 'active'
                            ? 'active'
                            : event.status === 'waiting'
                            ? 'waiting'
                            : '',
                        ]"
                      >
                        <span>{{ dayFlag(event) }}</span>
                      </div>
                    </div>
                    <img
                      :src="`${event.main_photo.avatar}`"
                      class="event__card-img"
                      alt=""
                    />
                  </div>
                </router-link>
                <div class="event__card-footer">
                  <p class="text-muted">
                    <span>{{ event.category }} </span> •
                    <span>{{ event.age }}</span>
                  </p>
                  <h2 class="event__card-title">{{ event.title }}</h2>
                  <p class="event__card-text">
                    {{ event.announce }}
                  </p>
                  <p class="text-muted">
                    {{ event.address }}
                  </p>
                  <div class="event__card-info">
                    <div class="event__card-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        @click="addLike(event)"
                        :class="{ active: event.like }"
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

                      <span>{{
                        event.likes_count !== null ? event.likes_count : 0
                      }}</span>
                    </div>
                    <div class="event__card-icon">
                      <img src="../static/message2.svg" alt="" />
                      <span>{{
                        event.comments_count !== null ? event.comments_count : 0
                      }}</span>
                    </div>
                    <div class="event__card-icon">
                      <img src="../static/users.svg" alt="" />
                      <p>
                        <span>{{ event.users.length }}</span
                        >/<span>{{ event.dates_count }}</span>
                      </p>
                    </div>
                    <img
                      src="../static/bookmark.svg"
                      class="event__card-icon_bookmark"
                      alt=""
                    />
                  </div>
                </div>
              </b-card>
            </div>
            <button
              v-if="btnMore"
              @click="changePagination()"
              class="default-button default-button__icon"
            >
              <img
                src="../static/update.svg"
                class="event__setting-icon"
                alt=""
              />
              Показать еще
            </button>
          </b-tab>
          <b-tab title="Tab 2">
            <template #title>
              <img src="../static/mailbox2.svg" alt="" /> Завершенные
            </template>

            <div class="event__cards-wrapper">
              <b-card
                v-for="(event, index) in eventPassed"
                :key="index"
                class="event__card"
              >
                <router-link
                  :to="{
                    name: 'eventsId',
                    params: { id: event.slug, slug: event.slug },
                  }"
                >
                  <div class="event__card-header">
                    <div class="event__card-user">
                      <img
                        :src="`${event.author.main_photo.avatar}`"
                        class="event__user-img"
                        alt=""
                      />
                      <span class="event__card-user_title">{{
                        event.author.name
                      }}</span>
                      <div class="event__card-user_flag"></div>
                    </div>
                    <img
                      :src="`${event.main_photo.avatar}`"
                      class="event__card-img"
                      alt=""
                    />
                  </div>
                </router-link>
                <div class="event__card-footer">
                  <p class="text-muted">
                    <span>{{ event.category }} </span> •
                    <span>{{ event.age }}</span>
                  </p>
                  <h2 class="event__card-title">{{ event.title }}</h2>
                  <p class="event__card-text">
                    {{ event.announce }}
                  </p>
                  <p class="text-muted">
                    {{ event.address }}
                  </p>
                  <div class="event__card-info">
                    <div class="event__card-icon">
                      <img
                        @click="addLike(event)"
                        src="../static/like.svg"
                        alt=""
                      />
                      <span>{{
                        event.likes_count !== null ? event.likes_count : 0
                      }}</span>
                    </div>
                    <div class="event__card-icon">
                      <img src="../static/message2.svg" alt="" />
                      <span>{{
                        event.comments_count !== null ? event.comments_count : 0
                      }}</span>
                    </div>
                    <div class="event__card-icon">
                      <img src="../static/users.svg" alt="" />
                      <p>
                        <span>{{ event.users.length }}</span
                        >/<span>{{ event.dates_count }}</span>
                      </p>
                    </div>
                    <img
                      src="../static/bookmark.svg"
                      class="event__card-icon_bookmark"
                      alt=""
                    />
                  </div>
                </div>
              </b-card></div
          ></b-tab>
        </b-tabs>
      </div>
    </section>
  </main>
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
      sliderOptions: [],
      events: [],
      eventPassed: [],
      meta: { page: 1 },
      btnMore: true,
    
      today: new Date(new Date().valueOf() + 1000 * 3600 * 24),
    };
  },
  async created() {
    await this.fetchData();
  },

  methods: {
    getImageUrl(imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`;
    },
    dayFlag(event) {
      let today = new Date(new Date().valueOf() + 1000 * 3600 * 24);
      let other = new Date(event.dates.date.from);
      let lastDay = new Date(event.dates.date.to);
      let todayTime = moment(today).format("HH:mm");
      let tomorrow = new Date();
      let count = 1;
      if (
        event.dates.date.from === event.dates.date.to &&
        today == other &&
        todayTime > event.dates.time.from
      ) {
        console.log(3);
        return "ИДЕТ СЕЙЧАС";
      } else if (
        event.dates.date.from === event.dates.date.to &&
        today < other &&
        todayTime > event.dates.time.from
      ) {
        return moment(other).format("DD MMMM") + " • " + event.dates.time.to;
      } else if (other !== lastDay && today > other) {
        while (lastDay > tomorrow) {
          tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000 * count);
          count++;
        }
        return `ИДЕТ СЕЙЧАС / ЕЩЕ ${count - 1} ДНЕЙ`;
      } else if (other !== lastDay && today < other) {
        return (
          moment(other).format("DD MMMM") +
          " • " +
          event.dates.time.to +
          "/" +
          `${event.dates.items.length} ДНЕЙ`
        );
      }
    },
    async fetchData() {
      try {
        let events = await this.$api.event.all();
        this.events = events.data.data;
        let { data } = await this.$api.event.slider();
        this.sliderOptions = data.data;
      } catch (e) {
        console.log(e.message);
      }
    },
    changePagination() {
      ++this.meta.page;
      this.getCard();
    },
    async getCard() {
      try {
        let events = await this.$api.event.all(this.meta);
        if (events.data.data.length) {
          events.data.data.forEach((element) => {
            this.events.push(element);
          });
        } else {
          this.btnMore = false;
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    cardPassed(element) {
      this.eventPassed.push(element);
      this.events.splice(this.events.indexOf(element), 1);
    },
    async addLike(event) {
      try {
        console.log(event.id);
        let like = await this.$api.event.addLike(event.id);
       
        if (event.like) {
          event.likes_count = parseInt(event.likes_count) - 1;
        } else {
          event.likes_count = parseInt(event.likes_count) + 1;
        } event.like = !event.like;
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  watch: {
    events: {
      immediate: true,
      handler() {
        if (this.events) {
          this.events.forEach((element) => {
            if (element.status === "passed") {
              this.cardPassed(element);
            }
          });
        }
      },
    },
  },
};
</script>


