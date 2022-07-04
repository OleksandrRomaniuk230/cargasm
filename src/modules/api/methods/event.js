export default (axios) => ({
  async slider(payload) {
    return await axios.get("events/slider", payload);
  },
  async addEvent(payload) {
    return await axios.post("events", payload);
  },
  async eventSelect(payload) {
    return await axios.get("events/create", payload);
  },
  async all(payload) {
    return await axios.get("events/all", { params: payload });
  },
  async onceEvent(id,payload) {
    return await axios.get(`events/${id}`);
  },
  async eventUpdate(id, payload) {
    return await axios.post(`events/${id}`, payload);
  },
  async eventEdit(id) {
    return await axios.get(`events/${id}/edit`);
  },
  async addLike(id) {
    return await axios.post(`events/${id}/like`);
  },
  
});
