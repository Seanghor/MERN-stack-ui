import { SignInUserDto } from "../types/users/signin-user-dto";

let URL = import.meta.env.VITE_BASE_URL;

export const loginAPI = async (loginDto: SignInUserDto) => {
    console.log('url', URL);

    const response = await fetch(`${URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDto),
    });
    const status = await response.status;
    const res = await response.json();
    // console.log('>>>>>> login API status', res);

    if (status === 200 || status === 201) {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        return { status, data: res };
    } else {
        return { status, data: res.error };
    }

};

export const isAuthenticated = () => {
    var token = localStorage.getItem('accessToken');
    return token ? true : false;

}

export const logoutAPI = () => {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
}