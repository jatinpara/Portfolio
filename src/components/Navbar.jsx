import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Portfolio</span>

           
            
        </div>
        <div className='m-8 flex items-center justify-center gap-6 text-3xl'>
  <a href="https://www.linkedin.com/in/jatin-parashar-44b099269" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
    <FaLinkedin />
  </a>
  <a href="https://github.com/jatinpara" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
    <FaGithub />
  </a>
</div>
    </div>
  )
}

export default Navbar