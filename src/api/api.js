import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '38a59e07-59b4-45d3-8d3c-f82bb3a752f7'
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
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getState(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}