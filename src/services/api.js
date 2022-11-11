import axios from 'axios';

axios.defaults.baseURL = 'https://aleannlab.herokuapp.com/api/users';

class Api {
    async getUsers() {
        return (await axios.get()).data;
    }

    async remove(id) {
        return await axios.delete(`/${id}`);
    }

    async add(name) {
        return await axios.post(`/`, { name });
    }

    async update(id, user) {
        return await axios.patch(`/${id}`, user);
    }
}

export default new Api();
