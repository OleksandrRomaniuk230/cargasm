<template>
  <textarea
    :placeholder="placeholder"
    class="default__textarea"
    v-model="result"
  ></textarea>
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
  },
  data() {
    return { result: "" };
  },
  watch: {
    result() {
      this.$emit("textarea-text", this.result);
    },
  },
};
</script>