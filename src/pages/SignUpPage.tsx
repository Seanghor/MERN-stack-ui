import React, { useState } from 'react'
import { WrapperComponent } from '../components/HOC/WrapperComponent';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { signUpAPI } from '../services/users';

const SignUpPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate()

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ username, password })
        const res = await signUpAPI({ username, password });
        if (res.status === 200 || res.status === 201) {
            navigate('/your-tasks');
        } else {
            // setErrorMessage("Error failed to create account");
            setErrorMessage(res.data);
            setTimeout(() => {
                setErrorMessage('');
            }, 1000);

        }
    }
    return (
        <WrapperComponent>
            <div className='flex flex-col justify-center px-0 md:px-[10%] lg:px-[20%] pt-[40px] md:pt-[60px] lg:pt-[80px]'>
                <div className='flex justify-centeritems-center  items-center'>
                    <a href="#" className="flex items-center mx-auto mb-6 text-2xl font-semibold text-red-600 dark:text-white">
                        <Icon
                            icon="logos:todoist"
                            className="md:mr-6 text-2xl md:text-4xl lg:text-5xl"
                        />
                    </a>
                </div>
                <div className=' items-center'>
                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl py-3 md:py-6 lg:py-10'>
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSignUp}>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-600 dark:text-gray-400">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <p className={` text-red-600 text-center mt-2 font-poppins h-10`}>{errorMessage}</p>
                        <button type="submit" className="w-full text-white bg-sky-500 hover:bg-sky-700 duration-500 rounded-lg py-1 md:py-2 lg:py-3 text-white-normal font-medium">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                        </p>
                    </form>

                </div>
            </div>

        </WrapperComponent>

    )
}
export default SignUpPage;
