import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': 'f969fb73-d16f-48ed-9f38-3bf68d40ab5c'
        }
    }
)
export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(
            `users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get((`profile/` + userId)
        )
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}