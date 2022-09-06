import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../../components/NavBar"


function NewBeerPage() {

    const [form, setForm] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: parseInt("", 10),
        contributed_by: ""
    })

    const navigate = useNavigate()

    function handleChange (e) {
        setForm({...form, [e.target.name]: e.target.value})
    }


    async function handleSubmit (e) {
        e.preventDefault()

        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form)
            navigate("/beers")
        } catch (error) {
            console.log(error)
        }
    }
    
    return ( 
    <div>   
            <NavBar />
        <label>Create you own beer!</label>

        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
        <br></br>

        <label>Tag line</label>
        <input name="tagline" value={form.tagline} onChange={handleChange} />
        <br></br>

        <label>Description</label>
        <input name="description" value={form.description} onChange={handleChange} />
        <br></br>   

        <label>First Brewed</label>
        <input name="first_brewed" value={form.first_brewed} onChange={handleChange} />
        <br></br>

        <label>Brewer Tips</label>
        <input name="brewers_tips" value={form.brewers_tips} onChange={handleChange} />
        <br></br>

        <label>Attenuation Level</label>
        <input name="attenuation_level" value={form.attenuation_level} onChange={handleChange} />
        <br></br>

        <label>Contributed By</label>
        <input name="contributed_by" value={form.contributed_by} onChange={handleChange} />
        <br></br>
        
        <button type="submit">Save</button>

        </form>
    </div>
     )
}

export default NewBeerPage