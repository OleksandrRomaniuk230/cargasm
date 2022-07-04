<template>
  <div>
    <vueSelect
      @input="changeValue"
      :options="options"
      :label="labelName"
      :placeholder="placeholder"
      v-model="selected"
    >
    </vueSelect>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Object, String],
      default: () => {
        return {};
      },
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    inputName: {
      type: String,
      default: "",
    },
    value: {
      type: [Number, String, Array, Boolean, Object],
      default: null,
    },

    labelName: {
      type: String,
      default: "name",
    },

    options: {
      type: [Array, Object],
      required: false,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      selected: "",
    };
  },

  methods: {
    getOptionLabel(option) {
      if (typeof option === "object") {
        if (!option.hasOwnProperty(this.labelName)) {
          return console.warn(
            `[vue-select warn]: Label key "option.${this.labelName}" does not` +
              ` exist in options object ${JSON.stringify(option)}.\n` +
              "http://sagalbot.github.io/vue-select/#ex-labels"
          );
        }
        return option[this.labelName];
      }
      return option;
    },
    changeValue(e) {
      if (typeof e !== "string") {
        if (e.key) {

          this.$emit("input", e.key);
        } else {
  
          this.$emit("input", e.value);
        }
      }
    },
  },
  watch: {
    value: {
      handler(bef) {
       if(!this.selected){
         this.selected=bef
       }
      },
    },
  },
};
</script>