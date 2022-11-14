import Image from 'next/image';

import douglas from '../assets/crew/image-douglas-hurley.png';
import anoushed from '../assets/crew/image-anousheh-ansari.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';


import NavBar from '../components/NavBar';
import style from '../styles/crew.module.css';
import { useState } from 'react';

const data = {
    douglas: {
        image: douglas,
        profission: "COMMANDER",
        name: "DOUGLAS HURLEY",
        info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    mark: {
        image: mark,
        profission: "Mission Specialist ",
        name: "MARK SHUTTLEWORTH",
        info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    victor: {
        image: victor,
        profission: "PILOT",
        name: "Victor Glover",
        info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    },
    anoushed: {
        image: anoushed,
        profission: "Flight Engineer",
        name: "Anousheh Ansari",
        info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    }
}

export default function Crew() {

    const [info, setInfo] = useState(data.douglas);

    return (
        <div className={style.container}>
            <NavBar />
            <div className={style.content}>
                <div className={style.info}>
                    <h1><strong>01 </strong>Meet your crew</h1>
                    <div>
                        <h2>{info.profission}</h2>
                        <h3>{info.name}</h3>
                        <p>{info.info}</p>
                    </div>
                    <ul>
                        <li onClick={() => setInfo(data.douglas)}></li>
                        <li onClick={() => setInfo(data.mark)}></li>
                        <li onClick={() => setInfo(data.victor)}></li>
                        <li onClick={() => setInfo(data.anoushed)}></li>
                    </ul>
                </div>
                <Image src={info.image} alt="pessoa" width={400} height={550} />

            </div>
        </div>
    )
}