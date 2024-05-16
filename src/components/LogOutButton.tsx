
import { Icon } from '@iconify/react/dist/iconify.js';
import { logoutAPI } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const LogOutButton = () => {
    const navigate = useNavigate()
    const handleSignOut = () => {
        logoutAPI()
        navigate('/signin')
    }
    return (
        <div className="p-px fixed top-[10px] md:top-[30px] lg:top-[50px] right-3 md:right-4 lg:right-10">
            <button
                onClick={handleSignOut}
                className="border-2 rounded-md px-4 py-2 bg-zinc-400 hover:bg-zinc-700 text-white-normal hover:text-white transition-all duration-300 flex items-center justify-center"

            >
                <span className="mr-2">
                    <Icon icon="tabler:logout" className="text-xl" />
                </span>
                <span className="text-xs md:text-sm lg:text-base">Sign Out</span>
            </button>
        </div>

    )
}
export default LogOutButton