import React, { useState } from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isBurgerX, setIsBurgerX] = useState(false)

    const toggleBurger = () => {
        toggleBurgerX()
        toggleMenu()
    }

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const toggleBurgerX = () => {
        setIsBurgerX(prev => !prev)
    }

    const toggleCloseMenu = () => {
        toggleBurger()
    }

  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header__wrapper">
                <div className="header__navbar">
                    <img src="/logo.png" alt="logo" />
                    <ul className="header__ul">
                        <Link className='header__link'>
                            Одежда
                        </Link>
                        <Link className='header__link'>
                            Обувь
                        </Link>
                        <Link className='header__link'>
                            Аксессуары
                        </Link>
                        <Link className='header__link'>
                            Калькулятор стоимости
                        </Link>
                        <Link className='header__link'>
                            Помощь
                        </Link>
                        <Link className='header__link'>
                            Подобрать размер
                        </Link>
                    </ul>
                </div>
                <div className="header__cart">
                    <img className='header__cart-svg' src="/cart.svg" alt="cart" />
                    <button className="header__btn">
                        <img src="/logo-white.svg" alt="logo-white" />
                        <div className="header__btn-flex">
                            <p className="header__title">Наш телеграм канал</p>
                            <p className="header__text">Telegram web app</p>
                        </div>
                    </button>
                    <button onClick={toggleBurger} className={isBurgerX ? 'header__burger active' : 'header__burger'}>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={isOpen ? 'header__menu active' : 'header__menu'}>
                        <img src="/logo.png" alt="logo" />
                            <ul className="header__ul">
                                <Link className='header__link'>
                                    Одежда
                                </Link>
                                <Link className='header__link'>
                                    Обувь
                                </Link>
                                <Link className='header__link'>
                                    Аксессуары
                                </Link>
                                <Link className='header__link'>
                                    Калькулятор стоимости
                                </Link>
                                <Link className='header__link'>
                                    Помощь
                                </Link>
                                <Link className='header__link'>
                                    Подобрать размер
                                </Link>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header