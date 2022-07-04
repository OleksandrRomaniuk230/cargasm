export default (axios) => ({
    async deletePhoto(id) {
      return await axios.delete(`medias/${id}`);
    },
  });
  