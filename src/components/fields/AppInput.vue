<template>
  <div>
    <input :value="value" type="text" class="default__input" :placeholder="placeholder"   @input="$emit('input', $event.target.value)" />
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
     value: {
    type: [String, Number],
    },
  },
  data() {
    return { result: "" };
  },
  watch:{
   result(){
this.$emit('text-input',this.result)
    }
  }
};
</script>