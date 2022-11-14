import Image from 'next/image';
import NavBar from "./NavBar";

import style from '../styles/destination.module.css';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import titan from '../assets/destination/image-titan.png';
import europa from '../assets/destination/image-europa.png';

import { useState } from 'react';

const data = {
    moon: {
        image: moon,
        title: "MOON",
        info: "See our planet as you’ve never seen it before.A perfect relaxing trip away to help regain perspective and come back refreshed.While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.Avg. distance 384,400 km Est. travel time 3 days",
        distance: "384,400KM",
        time: "3 DAYS"

    },
    mars:{
        image: mars,
        title: "MARS",
        info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "255 MIL. KM",
        time: "9 MONTHS"
    },
    titan:{
        image: titan,
        title: "TITAN",
        info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1,6BIL. KM",
        time: "7 YEARS"
    },
    europa:{
        image: europa,
        title: "EUROPA",
        info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. KM",
        time: "3 YEARS"
    }
}

export default function DestinationComponent() {

    const [info, setInfo] = useState(data.moon);


    return (
        <div className={style.container}>
            <NavBar />
            <div className={style.content}>

                <div className={style.image} >
                    <h1><strong>01 </strong>Pick your destination</h1>
                    <Image src={info.image} alt="logo" width={445} height={445} />
                </div>

                <div className={style.info}>
                    <ul>
                        <li onClick={() => setInfo(data.moon)}>Moon</li>
                        <li onClick={() => setInfo(data.mars)}>Mars</li>
                        <li onClick={() => setInfo(data.europa)}>Europa</li>
                        <li onClick={() => setInfo(data.titan)}>Titan</li>
                    </ul>
                    <h1>{info.title}</h1>
                    <p>{info.info}</p>
                    <div className={style.linha}></div>
                    <div className={style.info_travel}>
                        <div>
                            <h3>AVG. DISTANCE</h3>
                            <strong>{info.distance}</strong>
                        </div>
                        <div >
                            <h3>EST. TRAVEL TIME</h3>
                            <strong>{info.time}</strong>
                        </div>
                    </div>



                </div>
            </div>
        </div>


    )
}