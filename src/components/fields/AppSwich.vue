<template>
  <div class="switch">
    <label class="switch-label">
      <input
        type="checkbox"
        v-model="val"
        @change="$emit('input', val)"
        checked
      />
      <span class="slider round"></span>
    </label>
    <div>
      <span>{{ label }}</span> <span class="switch__hint">{{ hint }}</span>
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
    value: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      val: this.valChange || null,
    };
  },

  methods: {
    emitSwitch() {
      this.$emit("active", this.active);
    },
  },
  watch: {
    valChange: {
      handler(bef) {
        this.val = bef;
      },
    },
    val: {
      handler(bef) {
        this.$emit("change", bef);
      },
    },
    value: {
      handler(bef) {
        this.val = this.value;
      },
    },
  },
};
</script>