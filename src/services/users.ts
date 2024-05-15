import { SignUpUserDto } from "../types/users/signup-user-dto";

let URL = import.meta.env.VITE_BASE_URL;
export const signUpAPI = async (signUpDto: SignUpUserDto) => {
    console.log('url', URL);

    const response = await fetch(`${URL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpDto),
    });

    const status = response.status;
    const res = await response.json();
    console.log('>>>>>> signUp API status', status);
    if (status === 201 || status === 200) {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        return { status, data: res };
    } else {
        return { status, data: res.error };
    }

}


