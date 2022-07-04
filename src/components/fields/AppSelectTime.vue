<template>
  <div class="timepicker__wrapper">
    <div class="timepicker__input">
      <input
        type="text"
        :placeholder="placeholder"
        v-model="time"
        @click="focusTimepicker = true"
        class="timepicker"
      />
      <!--      @blur="focusTimepicker = false" -->
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 20.765C12.0964 21.2012 10.1025 21.0064 8.31936 20.2099C6.53619 19.4135 5.06048 18.0586 4.11494 16.3498C3.1694 14.641 2.80534 12.671 3.07772 10.7372C3.35009 8.80331 4.24411 7.01051 5.62486 5.62936C7.0056 4.24821 8.79813 3.35366 10.7319 3.08071C12.6657 2.80777 14.6358 3.17124 16.3449 4.11628C18.0539 5.06131 19.4092 6.53662 20.2062 8.31955C21.0032 10.1025 21.1986 12.0963 20.763 14"
          stroke="#E12927"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="timepicker__icon"
          :class="{ active: focusTimepicker }"
        />
        <path
          d="M17.25 19.25H21.25"
          stroke="#E12927"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="timepicker__icon"
          :class="{ active: focusTimepicker }"
        />
        <path
          d="M19.25 21.25V17.25"
          stroke="#E12927"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="timepicker__icon"
          :class="{ active: focusTimepicker }"
        />
        <path
          d="M11.718 7.98499V12.636L15.374 14.865"
          stroke="#E12927"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="timepicker__icon"
          :class="{ active: focusTimepicker }"
        />
      </svg>
    </div>
    <div class="timepicker__dropdown" :class="{ active: focusTimepicker }">
      <ul class="timepicker__options">
        <li
          v-for="(option, index) in options"
          :key="index"
          class="timepicker__option"
          :class="{ active: option.active, 'active-item': option.activeItem }"
          @click="changtOption(option)"
        >
          {{ option.time }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    defaultTime: {
      type: [Array, String],
      default: "",
    },
  },

  data() {
    return {
      options: [
        { time: "00:00", active: false, activeItem: false },
        { time: "01:00", active: false, activeItem: false },
        { time: "02:00", active: false, activeItem: false },
        { time: "03:00", active: false, activeItem: false },
        { time: "04:00", active: false, activeItem: false },
        { time: "05:00", active: false, activeItem: false },
        { time: "06:00", active: false, activeItem: false },
        { time: "07:00", active: false, activeItem: false },
        { time: "08:00", active: false, activeItem: false },
        { time: "09:00", active: false, activeItem: false },
        { time: "10:00", active: false, activeItem: false },
        { time: "11:00", active: false, activeItem: false },
        { time: "12:00", active: false, activeItem: false },
        { time: "13:00", active: false, activeItem: false },
        { time: "14:00", active: false, activeItem: false },
        { time: "15:00", active: false, activeItem: false },
        { time: "16:00", active: false, activeItem: false },
        { time: "17:00", active: false, activeItem: false },
      ],
      options1: [],
      time: null,
      focusTimepicker: false,
    };
  },
  methods: {
    changtOption(option) {
      if (this.options1.length < 1) {
        option.active = !option.active;
        this.options1.push(option);
        this.time = option.time;
      } else if (this.options1.length === 1) {
        option.active = !option.active;
        this.options1.push(option);
        this.sortOptions();
        this.time =
          "c " + this.options1[0].time + " - " + this.options1[1].time;
        this.optionActive();

        this.$emit("time-text", this.time);
        this.focusTimepicker = false;
      } else {
        this.options.forEach((element) => {
          element.active = false;
          element.activeItem = false;
        });
        option.active = !option.active;
        this.clearOptions(option);
      }
    },
    clearOptions(option) {
      this.options1 = [];
      this.options1.push(option);
      this.time = option.time;
    },
    sortOptions() {
      this.options1.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    },
    optionActive() {
      for (
        let el = this.options.indexOf(this.options1[0]) + 1;
        el < this.options.indexOf(this.options1[1]);
        el++
      ) {
        this.options[el].activeItem = true;
      }
    },
  },
  mounted() {
    const select = this.$el.querySelector(".timepicker");
    const active = document.getElementsByClassName("timepicker__option")[0];
    window.addEventListener("click", (e) => {
      let target = e.target;
      if (target != select && active.toString() != target.toString()) {
        this.focusTimepicker = false;
      }
    });
  },

  watch: {
    defaultTime: {
      handler(bef) {
        if (!this.time) {
          this.time = "c " + this.defaultTime[0] + " - " + this.defaultTime[1];
          this.$emit("time-text", this.time);
        }
      },
    },
  },
};
</script>
