export default (axios) => ({
    async login(payload) {
      return await axios.post("auth/login", payload);
    },
    async regestration(payload) {
        return await axios.post("auth/register", payload);
      },
     async logout(payload) {
        return await axios.post('auth/logout');
      },
    
  });
  