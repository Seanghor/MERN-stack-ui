import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/signin')
    })
    return (
        <div className='bg-green-400 h-48 text-4xl text-red-normal'>HomePage</div>
    )
}
export default HomePage;