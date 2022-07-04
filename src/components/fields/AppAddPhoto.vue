<template>
  <div class="photo-add">
    <img
      v-if="(preview && clearphoto) || editPreview"
      :src="preview || editPreview"
      class="photo-add__img"
    />
    <label v-else class="photo-add__label">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M73.334 53.334V13.334C73.329 11.5673 72.625 9.87447 71.3757 8.62525C70.1265 7.37603 68.4336 6.67201 66.667 6.66699H26.667C24.9003 6.67201 23.2075 7.37603 21.9583 8.62525C20.709 9.87447 20.005 11.5673 20 13.334V53.334C20.0053 55.1005 20.7094 56.7931 21.9586 58.0421C23.2078 59.2911 24.9005 59.995 26.667 60H66.667C68.4335 59.995 70.1262 59.2911 71.3754 58.0421C72.6246 56.7931 73.3287 55.1005 73.334 53.334ZM36.667 40L43.434 49.033L53.334 36.667L66.667 53.334H26.667L36.667 40ZM6.66699 20V66.667C6.67201 68.4336 7.37603 70.1265 8.62525 71.3757C9.87447 72.625 11.5673 73.329 13.334 73.334H60V66.667H13.334V20H6.66699Z"
          fill="#D7DCDE"
        />
      </svg>
      <button>+ Добавить фото</button></label
    >
    <input
      @change="uploadFile"
      type="file"
      ref="file"
      class="photo-add__file"
      name="file"
    />
  </div>
</template>
<script>
export default {
  props: {
    clearphoto: {
      type: Boolean,
      default: true,
    },
    editPreview: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      preview: null,
      image: null,
    };
  },
  methods: {
    uploadFile(e) {

      var input = e.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
          this.$emit("preview", this.preview);
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
      this.$emit("photo", this.image);
   
    },
  },
};
</script>