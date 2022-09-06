import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar"
import { useParams } from "react-router-dom";


function PageDetails() {
    
    const { beerId } = useParams()
    const [details, setDetails] = useState({})
  



    useEffect(() => {

        async function fetchDetails () {
        
            try {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                setDetails(response.data)
            } catch (error) {
                console.log(error)
            } 
        }
            fetchDetails()
    }, [beerId])

        
    return (
    <>
    <Navbar />
    <div>
        <div><img src={details.image_url} style={{width: "50px"}}alt="beer bottle"/></div>
        <div>{details.name}</div>
        <div>{details.tagline}</div>
        <div>{details.first_brewed}</div>
        <div>{details.attenuation_level}</div>
        <div>
        {details.description}
        {details.contributed_by}
        </div>
    </div> 
    </>);
}

export default PageDetails