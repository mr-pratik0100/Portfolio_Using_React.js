import React from 'react'
import styles from './Footer.module.css'
import {BsGithub,BsLinkedin,BsInstagram} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.flex}>
            <div>
                <p>&copy; 2024 by Pratik Shiradkar All rights reserved.</p>
            </div>
            <div className={styles.icon}>
                <a href="https://github.com/mr-pratik0100">
                    <BsGithub size={30}/>
                </a>
                <a href="https://www.instagram.com/mr_pratik_0100/">
                    <BsInstagram size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/pratik-shiradkar-051157191/">
                    <BsLinkedin size={30}/>
                </a>
            </div>
        </div>
      </div>
    </footer>
  )
}
