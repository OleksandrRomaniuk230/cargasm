<template>
  <div class="custom-radio">
    <label>
      <input type="radio" name="radio"  @input="$emit('option')"/>
      <div class="custom-radio__label">
        <span>{{ label }}</span>
      </div>
    </label>
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
  },
  data() {
    return{selected: false,}
  },
};
</script>