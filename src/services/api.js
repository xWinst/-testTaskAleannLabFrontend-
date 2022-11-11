import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/users';

class Api {
    // #query = '';
    // page = 1;

    // set query(newQuery) {
    //     this.signal = null;
    //     this.page = 1;
    //     this.#query = newQuery;
    // }

    // get query() {
    //     return this.#query;
    // }

    // async search() {
    //     return await this.#fetch('search/movie');
    // }

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

    // async getCredits(id) {
    //     return await this.#fetch(`movie/${id}/credits`);
    // }

    // async getReviews(id) {
    //     return await this.#fetch(`movie/${id}/reviews`);
    // }

    // async #fetch(typeRequest) {
    //     const response = await axios.get(typeRequest, {
    //         params: {
    //             api_key: API_KEY,
    //             query: this.#query,
    //             page: this.page,
    //         },
    //         signal: this.signal,
    //     });
    //     return response.data;
    // }
}

export default new Api();
