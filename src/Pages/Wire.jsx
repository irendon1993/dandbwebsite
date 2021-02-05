import React, {useEffect,useState} from 'react'
import wireHero from "../Images/edmHero.jpg"
import { Link } from 'react-router-dom'

export function Wire() {
    
    const [wireData, setWireData] = useState([])

  async function laserTest() {
    const response = await fetch(
        'https://strapi-mongo-backend.herokuapp.com/about-pages'
    )
  
    const json = await response.json()
  
    setWireData(json)
  }

  useEffect(()=> {
    laserTest()
  },[])

  console.log(wireData)

    return(

        
        <div className="wire">
            <h1>Laser Engraving</h1>

            <div className="wireBox">
                <div className="wireHero">
                    <img src={wireHero} />
                </div>
                <div className="wireText">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid vero repudiandae aspernatur a impedit vitae rem natus itaque totam doloremque nostrum voluptate, ullam optio autem distinctio ab expedita consequatur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum possimus quidem voluptatum officia dolores deserunt dolorum id cupiditate nisi provident consectetur sed doloremque quas, molestiae reiciendis architecto modi totam cum.
                    </p>
                
                </div>
            </div>
            
            
            
        </div>
    );
}