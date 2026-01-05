const axios = require('axios')

interface data {
    Email: string
    Password: string
}

const api = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
})

export const login = async (data: data) => {
    try {
        const response = await api.post('/auth/login', data)
        if (!response) {
            throw new Error('Login failed')
        }
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const googleLogin = async () => {
    try {
        window.location.href = 'http://localhost:3001/auth/google' //redirect to backend for google auth
    } catch (error) {
        console.error(error)
    }
}

export const logout = async () => {
    try {
        const response = await api.post('/auth/logout')
        if (!response) {
            throw new Error('Logout failed')
        }
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getProfile = async () => {
    try {
        const response = await api.get('/user/profile')
        if (!response) {
            throw new Error('Failed to fetch profile')
        }
        return response.data
    } catch (error) {
        console.error(error)
    }
}
