import * as axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '05f410a5-264a-4969-b817-89b37cc6cffa'
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
    },
    getUserProfileById: (userId) =>{
        return instans.get('profile/'+userId)
    }
}
export const authAPI = {
    authMe: () =>{
        return instans.get('auth/me')
    },
}