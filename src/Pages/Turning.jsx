import React from 'react'
import TurningItem from '../Images/ImageTurningMenuItem.jpg'
import { Link } from 'react-router-dom'

export function Turning() {
    return(
        <div className="turning">
            <section className="turningHero">
                <img src={TurningItem}></img>
            </section>
            <section className="turningEquipment">
                    <div className="turningingIntro">
                        <h2>
                            TURNING CENTERS
                        </h2>
                        <p>
                            2, 4, 5 and 7-axis turning centers – auto loading
                        </p>
                           
                    </div>
                    <div className="turningBody">
                        <div className="turningLeftText">
                        <span>Matsuura</span>
                            <p>
                                1 - Puma TT1800SY Twin-Turret Y Axis Mill/Drill CNC Lathe
                                Twin Spindle/turret with live tooling on both turrets
                                upper/lower Y-axis

                            </p>
                            <p>
                                1 - Wasino J Turning Center
                                Gantry loading automated work cell
                            </p>
                            <p>
                                1 - Miyano BNA-42DHY2
                                2 Spindles \ 1 - 8 station turret Y-Axis
                            </p>
                            <p>
                                1 - Puma TT1800SY Twin-Turret 
                                Y Axis Mill/Drill CNC Lathe
                                2-5/8” bar capacity
                                Edge Patriot 551 bar feeder
                                High pressure coolant system
                            </p>
                        </div>
                        <div className="turningMiddleText">
                            <p>                                          
                                1 - Nakamura WT100 Twin Spindle,
                                Twin Turret
                                1-5/8” bar capacity
                                Edge Patriot 551 bar feeder
                                High pressure coolant system

                            </p>
                            <p>
                                1 - Nakamura WT150 Twin Spindle, 
                                Twin Turret
                                2” bar capacity
                                Edge Patriot 551 bar feeder
                                High pressure coolant system
                            </p>
                            <p>
                                1 - Swistek AB20 Swiss Screen Machine
                                DLE magazine bar feeder
                                20mm bar capacity
                                7 axis, live tooling lathe with 
                                a removable
                                guide bushing
                                Twin Spindle
                            </p>
                        </div>    
                        <div className="turningRightText">
                            <p>
                                1 - Mori-Seiki NL-2500Y/1250 Turning Center
                                C & Y Axis Milling
                                10" Chuck
                            </p>
                            <p>
                                2 – Swistek AB42 Swiss Screw Machine
                                42mm bar capacity
                                Edge magazine bar feeder
                                Twin spindle
                                Simultanious 7-axis machining
                            </p>
                            <p>
                                1 - Mori-Seiki SL-204 Turning Center
                                2.5" bar capacity, Sub spindle, live tooling
                                IEMCA VIP80 4’ magazine bar feeder
                            </p>
                            <p>
                                1 - Wasino G07 Gang Tool Lathe with Bar Feed
                            </p>
                            <p>
                                1 - Mori-Seiki NL-2000 Tool Room Lathe
                            </p>
                        </div>
                    </div>
            </section>
        </div>
    );
}