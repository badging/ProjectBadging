import React, { useState } from 'react'
import { chaossLogo, mobileMenuIcon } from '../../assets/images'
import './header.scss';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [toggleNav, setToggleNav] = useState(false)



  return (
    <div>

      <header className='container-new'>
        <img src={chaossLogo} alt="logo" className='logo'/>
        <ul>
          <li><a href="/" className={pathname == '/'? 'activeNav': ''}>Home</a></li>
          <li><a href="/event-badging" className={pathname == '/event-badging'? 'activeNav': ''}>Event Badging</a></li>
          <li><a href="/project-badging" className={pathname.includes('/project-badging') ? 'activeNav': ''}>Project Badging</a></li>
          <li><a href="/faq" className={pathname == '/faq'? 'activeNav': ''}>FAQ</a></li>
        </ul>
        <img className='mobileNav' onClick={() => setToggleNav(!toggleNav)} src={mobileMenuIcon} alt="logo" />
        {
        pathname && (pathname.includes('/event-badging') || pathname.includes('/project-badging')) ? (
          <a href={pathname.includes('/event-badging') ? 'https://chaoss.community/diversity-and-inclusion-badging/' : '/badge'} className='apply-btn'>Apply for Badge</a>
        ) : (
          <div className='hidden-box'></div>
        )
      }

     </header>
     <div className="mobileNavContainer" style={{display: toggleNav ==true ? '' : 'none'}}>
          <ul className='mobile-list'>
            <li><a href="/" className={pathname == '/'? 'activeNav': ''}>Home</a></li>
            <li><a href="/event-badging" className={pathname == '/event-badging'? 'activeNav': ''}>Event Badging</a></li>
            <li><a href="/project-badging" className={pathname == '/project-badging'? 'activeNav': ''}>Project Badging</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
    </div>
    
  )
}

export default Nav
