import * as axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '95ba29c3-f0ce-4ab2-ad81-8bed9d6d86ce'
    }
})

export const usersAPI = {
    getUsers: (pageNum = 1, pageSize = 10)=>{
        return instans.get(`users?page=${pageNum}&count=${pageSize}`)
            .then(response => response.data)},
    followByUser: (userId) =>{
        return instans.post(`follow/${userId}`)
    },
    unFollowUser: (userId) =>{
        return instans.delete(`follow/${userId}`)
    }
}
