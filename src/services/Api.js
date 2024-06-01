import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://chocolanet-a9c27126050c.herokuapp.com/`,
        withCredentials: true
    })
}