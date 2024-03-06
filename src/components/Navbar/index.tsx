import { useState } from 'react'
import { navLinks } from '../../utils/navLinks'
import styles from './styles.module.css'

export const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  )
}

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => setOpen(!open)

  return (
    <nav className={`${styles.navMobile} ${styles.mobile}`}>
      <div
        className={`${styles.title} animate__animated animate__bounceInLeft`}
      >
        <a href='#welcome' className={styles.icon}>
          <img width={50} height={50} className={styles.icon} src='/favicon.svg' />
        </a>
        <p>
          A proyect made by <br /> <b>Frank bots maker</b>
        </p>
      </div>

      <div className={`${styles.listContainer} ${open ? styles.active : ''}`}>
        <div
          onClick={handleMenu}
          className={`${styles.bars} ${open ? styles.active : ''}`}
        >
          <span className={`${styles.bar_1} ${styles.bar}`}></span>
          <span className={`${styles.bar_2} ${styles.bar}`}></span>
          <span className={`${styles.bar_3} ${styles.bar}`}></span>
        </div>

        {open && (
          <div className={`${styles.list}`}>
            <div className={styles.links}>
              {navLinks.map(link => (
                <a
                  onClick={handleMenu}
                  key={link.href}
                  className={styles.link}
                  href={link.href}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const DesktopNavbar = () => {
  return (
    <nav className={`${styles.navDesktop} ${styles.desktop}`}>
      <div
        className={`${styles.title} animate__animated animate__bounceInLeft`}
      >
        <div className={styles.line}></div>
        <p>
          A proyect made by <b>Frank bots maker</b>
        </p>
      </div>

      <div
        className={`${styles.links} animate__animated animate__bounceInRight`}
      >
        {navLinks.map(link => (
          <a key={link.href} className={styles.link} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  )
}
