import { useContext } from "react"
import { BooksContext } from "./context/BooksProvider"
import CardFavorite from "./CardFavorite"




function ListFavorites() {

const {Favorites} = useContext(BooksContext)

  return (
    <div className="grid grid-cols-4 gap-2 w-full h-screen ">
    {Favorites.length ? (
       Favorites.map((b, key) => <CardFavorite   key={key} book={b} />)
     ) : (
       
      <div className=" col-span-1  flex justify-center items-center">
        <p className="text-center py-2 px-5 border border-blue-950 text-2xl">No hay favoritos aún </p>
      </div>
     )}
    </div>
   
  )
}

export default ListFavorites