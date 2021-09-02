import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    //组件渲染时执行这一部分，因为useEffect后面加了一个[]，所以只会在组件的渲染完成和卸载时执行，若是空数组加入了参数，则只有这个参数变化时才会进行重新渲染。
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      //组件卸载时渲染
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://raw.githubusercontent.com/LUGE666/flutter_video_netflix/master/assets/images/netflix_logo1.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://raw.githubusercontent.com/LUGE666/flutter_video_netflix/master/assets/images/netflix_logo0.png"
        alt="Netflix Logo"
      />
    </div>
  )
}

export default Nav
