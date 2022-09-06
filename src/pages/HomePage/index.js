import { Link } from "react-router-dom"
import beers from "../../assets/beers.png"
import newBeer from "../../assets/new-beer.png"
import randomBeer from "../../assets/random-beer.png"

function HomePage() {

    return ( 
        <>
    <div>   
        <img src={beers} style={{width: "100%"}}alt="beer labels"/>
        <Link to="/beers"><button>All Beers</button></Link>
    </div>

    <div>
    <img src={newBeer} style={{width: "100%"}} alt="beer and glass"/>
        <Link to="/new-beer"><button>New Beer</button></Link>
    </div>

    <div>
    <img src={randomBeer} style={{width: "100%"}} alt="draft beer  "/>
        <Link to="random-beer"><button>Random Beer</button></Link>
    </div>

    </>
     )
}

export default HomePage