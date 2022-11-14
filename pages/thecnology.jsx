import Image from 'next/image';
import NavBar from '../components/NavBar';

import vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceport from '../assets/technology/image-spaceport-portrait.jpg';
import { useState } from 'react';

import style from '../styles/thecnology.module.css';

const data = {
    vehicle: {
        image: vehicle,
        name: "LAUNCH VEHICLE",
        info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    capsule: {
        image: capsule,
        name: "SPACE CAPSULE",
        info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    },
    spaceport: {
        image: spaceport,
        name: "SPACEPORT",
        info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    }
}

export default function Thecnology() {

    const [info, setInfo] = useState(data.vehicle);

    return (
        <div className={style.container}>
            <NavBar />
            <div className={style.main}>
                <div className={style.content}>
                    <h1><strong>03 </strong>SPACE LAUNCH 101</h1>
                    <section>
                        <ul>
                            <li onClick={() => setInfo(data.vehicle)}>1</li>
                            <li onClick={() => setInfo(data.spaceport)}>2</li>
                            <li onClick={() => setInfo(data.capsule)}>3</li>
                        </ul>
                        <div>
                            <span>THE TERMINOLOGY…</span>
                            <h2>{info.name}</h2>
                            <p>{info.info}</p>
                        </div>
                    </section>
                </div>
                    <Image src={info.image} alt="Thecnology" width={515} height={527} />
            </div>
        </div>
    )
}