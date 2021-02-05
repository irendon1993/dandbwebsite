import React, {useEffect,useState} from 'react'
import StampingHero from "../Images/stampingHero.jpg"
import { Link } from 'react-router-dom'


export function Stamping() {

return(

        
    <div className="stamping">
        <h1>Metal Stamping </h1>

        <div className="stampingBox">
            <div className="stampingHero">
                <img src={StampingHero} />
            </div>
            <div className="stampingText">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid vero repudiandae aspernatur a impedit vitae rem natus itaque totam doloremque nostrum voluptate, ullam optio autem distinctio ab expedita consequatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus quidem voluptatum officia dolores deserunt dolorum id cupiditate nisi provident consectetur sed doloremque quas, molestiae reiciendis architecto modi totam cum.
                </p>
            
            </div>
        </div>
        
        
        
    </div>
);
}