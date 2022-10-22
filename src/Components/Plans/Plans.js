import React from 'react'
import "./Plans.css"
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
    return (
        <div className='plans-container' id='plan'>
            <div className=' blur plans-blur-1'></div>
            <div className=' blur plans-blur-2'></div>
            <div className='programs-header'>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            <div className='plans'>
                {plansData.map((lol, l) => {
                    return(
                    <div className='plan' key={l}>
                        {lol.icon}
                        <span>{lol.name}</span>
                        <span>$ {lol.price}</span>

                        <div className='features'>
                            {lol.features.map((feature) => {
                                return(
                                <div className='feature'>
                                    <img src={whiteTick} alt='' />
                                    <span key={l}>{feature}</span>
                                </div>
                                );
                            })}
                        </div>

                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                    )
                })}
                     
            </div>
        </div>
    )
}

export default Plans