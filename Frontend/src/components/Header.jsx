import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  console.log(location.pathname)
  return (
    <>
    
    <div className='flex justify-between items-center h-16 bg-slate-950 text-white shadow-md px-4'>
        <div className='flex items-center gap-2'>
            <HiBars3 onClick={toggleMenu} className={`w-7 h-7 block md:hidden font-bold ${isOpen ? 'hidden' : 'block'}`} />
            <img src="/Logo/clint_img1_remove.png" alt="logo" className='w-10 h-10 ' />
            <h1 className=' font-bold text-lg'>Edero Education</h1>
        </div>
        <div className=' hidden md:flex items-center gap-4 '>
            <Link to="/" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Home</Link>
            <Link to="/about" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/about' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>About</Link>
            <Link to="/programs" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/programs' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Programs</Link>
            <Link to="/careers" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/careers' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Careers</Link>
            {/* <Link to="/gallery" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/gallery' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Gallery</Link> */}
            <Link to="/contact" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/contact' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Contact</Link>
        </div>
    </div>
    
    <div className={` z-50  p-4 h-[calc(100vh-64px)] absolute top-[64px] left-0 bg-slate-900 text-white flex flex-col gap-4 w-52 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-400`}>
        <button className='self-end' onClick={toggleMenu}> <RxCross1 className='w-6 h-6 ' /> 
        </button>
            <Link onClick={toggleMenu} to="/" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Home</Link>
            <Link onClick={toggleMenu} to="/about" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/about' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>About</Link>
            <Link onClick={toggleMenu} to="/programs" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/programs' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Programs</Link>
            <Link onClick={toggleMenu} to="/careers" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/careers' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Careers</Link>
            {/* <Link onClick={toggleMenu} to="/gallery" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/gallery' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Gallery</Link> */}
            <Link onClick={toggleMenu} to="/contact" className={`text-gray-100 hover:border-amber-500 hover:text-stone-900 hover:font-bold hover:bg-amber-400 transition-all duration-500 border-2 border-gray-300 rounded-md px-4 py-2 ${location.pathname =='/contact' && 'border-amber-500 text-stone-900 font-bold bg-amber-400' }`}>Contact</Link>
    </div>
    </>
  )
}

export default Header