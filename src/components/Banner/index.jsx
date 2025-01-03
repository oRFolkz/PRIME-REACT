import React, { useState } from "react"
import { BannerDiv, BannerTxt, OpenClosedTxt, Time } from "./style.ts"

import capa from '../../imgs/capa.jpg'
import logo from '../../imgs/logo.webp'

function Banner() {

    const [useHours, setUseHours] = useState(Number);
    const [useMsg, setUseMsg] = useState(String);

    setTimeout(
        function getTime() {
            // get Date using JavaScript function
            const date = new Date();
            // get Hour and setState with the value
            const hours = date.getHours();
            setUseHours(hours)
            // get Minutes
            const minutes = date.getMinutes();
            // write Msg and setState with the value
            const whenWeOpenMsg = `Abre em: 
            ${(17-hours).toString().padStart(2, '0')}:${(60-minutes).toString().padStart(2, '0')}hrs`
            setUseMsg(whenWeOpenMsg)
            // return values that is beeing used
            return { whenWeOpenMsg, hours }
        }, 1000)

    return (
        <BannerDiv>
            <img src={capa} alt="Capa" className="backgroundImg"/>
            <BannerTxt>
                <img src={logo} alt="Capa" />
                <h1>PRIME BURGER</h1>
                <OpenClosedTxt
                className={useHours < 18 ? 'closed' : 'open'}>
                <p>{useHours < 18 ? (useMsg) : 'Aberto para pedidos' }</p>
                </OpenClosedTxt>
                <Time>
                    <p><i className="fa-regular fa-clock"></i><span>Aberto : </span>18:00 até 00:00</p>
                </Time>
            </BannerTxt>
        </BannerDiv>
    )
}

export default Banner