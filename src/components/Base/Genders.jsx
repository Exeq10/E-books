import { Link } from "react-router-dom"
import { generos } from "../../assets/generos"

function Genders() {
  return (
    
    <>

{
  generos.map((gen,key) => <li key={key} className="w-full hover:bg-blue-950 hover:text-white">
  <Link to={`${gen}`}>{gen}</Link>
</li>)
}
                
    </>
  )
}

export default Genders