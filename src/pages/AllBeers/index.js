import axios from "axios"
import { useState, useEffect } from "react"
import Navbar from "../../components/NavBar"
import { useNavigate } from "react-router-dom"



function AllBeers() {

    const [beers, setBeers] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        async function fetchBeers () {
        
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            console.log(response.data)
            setBeers(response.data)
            setIsLoading(true)
        } catch (error) {
            console.log(error)
        } 
    }   
    fetchBeers()

    }, [])

    

    return ( 

    <>
    <Navbar />
    <div>
            <label>All Beers</label>

            {isLoading && (
                <>
                {beers.map((beer) => {
                    return (
                        <div key={beer._id} style={{border: "2px solid grey", marginTop: "2px", marginBottom: "2px"}} onClick={() => navigate(`/beers/${beer._id}`)}>   
                            <img src={beer.image_url} style={{width: "50px"}} alt="beer"/>
                            <p>{beer.name}</p>
                            <p>{beer.tagline}</p>
                            <p>Created By: {beer.contributed_by}</p>
                        </div>
                        
                        )
                })}
                </>
            )

            }
                
            
    </div>
    </>
    )
}

export default AllBeers