import React from 'react'
import Link from 'next/link'
import style from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/works'>works</Link>
        </li>
        <li>
          {' '}
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
