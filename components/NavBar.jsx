import Image from 'next/image';

import style from '../styles/navbar.module.css';

import logo from '../assets/shared/logo.svg';

export default function NavBar() {
    return (
        <div className={style.container}>
            <Image src={logo} alt="logo" width={50} height={50} className={style.image} />
            <div className={style.linha} />
            <nav className={style.nav}>
                <a className={style.item} href="/">
                    <strong>00 </strong>
                    Home
                </a>
                <a className={style.item} href="destination">
                    <strong>01 </strong>
                    Destination
                </a>
                <a className={style.item} href="crew">
                    <strong>02 </strong>
                    Crew
                </a>
                <a className={style.item} href="thecnology">
                    <strong>03 </strong> 
                    Technology
                </a>
            </nav>
        </div>
    )
}