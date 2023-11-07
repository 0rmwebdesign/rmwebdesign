import react from 'react'
import { FaXTwitter } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
const Zoom = () => {
    return(
        <div className="bg-opacity-20 backdrop-blur-lg bg-gray-50 drop-shadow-md rounded h-100 sm:h-64 xl:h-80 2xl:h-96">
            <h1 className="ml-4 mt-4 text-3xl font-sans">Contact Us</h1>
            <div className="flex mt-12 ml-12">
            <a className="flex-1" href="mailto:rmwebdesign879@gmail.com"><IoMailOutline className="text-8xl"/></a>
            <a className="flex-1" href="https://twitter.com/design20522"><FaXTwitter className="text-8xl"/></a>
            </div>
        </div>
    )
}

export default Zoom