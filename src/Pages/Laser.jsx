import React, {useEffect,useState} from 'react'
import LaserHero from "../Images/laserHero.jpg"
import { Link } from 'react-router-dom'

export function Laser() {
    
    const [laserData, setLaserData] = useState([])

  async function laserTest() {
    const response = await fetch(
        'https://strapi-mongo-backend.herokuapp.com/about-pages'
    )
  
    const json = await response.json()
  
    setLaserData(json)
  }

  useEffect(()=> {
    laserTest()
  },[])

  console.log(laserData)

    return(

        
        <div className="laser">
            <h1>Laser Engraving</h1>

            <div className="laserBox">
                <div className="laserHero">
                    <img src={LaserHero} />
                </div>
                <div className="laserText">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid vero repudiandae aspernatur a impedit vitae rem natus itaque totam doloremque nostrum voluptate, ullam optio autem distinctio ab expedita consequatur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus quidem voluptatum officia dolores deserunt dolorum id cupiditate nisi provident consectetur sed doloremque quas, molestiae reiciendis architecto modi totam cum.
                    </p>
                
                </div>
            </div>
            
            
            
        </div>
    );
}