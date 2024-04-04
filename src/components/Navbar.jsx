import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React,{ useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';


function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <div className='container-fluid p-0 navigation'>
      <nav className="navbar">
            <h3 className="mx-3"> V PRAKASH</h3>
        <button
          className="navbar-toggle"
          aria-label='toggle-icon'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className='bg-white'/>
        </button>
        <div className={` navbar-links  ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="/" className='d-flex my-3'><AddHomeOutlinedIcon className='d-block d-md-none mx-3'/> Home</a>
          <a href="/about" className='d-flex my-3'> <BookOutlinedIcon className='d-block d-md-none mx-3'/> About</a>
          <a href="/services" className='d-flex my-3'><MiscellaneousServicesOutlinedIcon className='d-block d-md-none mx-3'/> Services</a>
          <a href="/contact" className='d-flex my-3'><ContactPhoneOutlinedIcon className='d-block d-md-none mx-3'/> Contact</a>
        </div>
      </nav>
      </div>
      
    );
    
}

export default Navbar