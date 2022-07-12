import React from 'react'
import { Link } from 'gatsby'

import blog from '../assets/icon-blog.png'
import github from '../assets/icon-github.png'
import me from '../assets/icon-me.png'
import home from '../assets/icon-home.png'
import linkedin from '../assets/icon-linkedin.png'
import moon from '../assets/icon-moon.png'
import sun from '../assets/icon-sun.png'
import "../styles/navigation.css"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Toggle from 'react-toggle'


const mainNavItems = [
  { url: '/blog', icon: blog, label: 'Blogs' },
  { url: '/about', icon: me, label: 'About me' },
]

const socialNavItems = [
  { url: 'https://github.com/danizheleva', icon: github, label: 'GitHub' },
  { url: 'https://www.linkedin.com/in/daniela-zheleva/', icon: linkedin, label: 'LinkedIn' }
]

const Navigation = () => {
    return (
        <header className="nav">
            <div className="nav-inner">
                <div className="nav-inner-left">
                    <Link to="/" className="nav-name"> <span>Daniela Zheleva</span></Link>
                </div>
                <div className="nav-inner-center">
                    {mainNavItems.map((item) => (
                        <Link to={item.url} key={item.label}>
                            <img src={item.icon} alt={item.label} />
                            <div className="tooltip">{item.label}</div>
                        </Link>
                    ))}
                </div>
                <div className="nav-inner-right">
                    {socialNavItems.map((item) => (
                        <a 
                            href={item.url}
                            target="_blank"
                            key={item.label}
                        >
                            <img src={item.icon} alt={item.label} />
                        </a>
                    ))}
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => (
                            <label>
                                <Toggle
                                    defaultChecked={theme === 'dark'}
                                    icons={{
                                        checked: <img src={moon} />,
                                        unchecked: <img src={sun} />,
                                    }}
                                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                                />
                            </label>
                        )}
                    </ThemeToggler>
                </div>
            </div>
        </header>
    )
}

export default Navigation