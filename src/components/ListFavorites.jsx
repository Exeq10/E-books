import { useContext } from "react"
import { BooksContext } from "./context/BooksProvider"
import CardFavorite from "./CardFavorite"




function ListFavorites() {

const {Favorites,deleteFav} = useContext(BooksContext)

  return (

      <>
    <div className="mt-12 ml-10"> <h2 className="text-2xl">Lista de <span className="text-blue-950 font-bold">Favoritos</span></h2>

      <h3 className="text-lg mt-2 text-gray-500">Aquí encontrarás todos tus libros favoritos</h3>
    
    </div>

    <div className="grid grid-cols-4 gap-2 w-full h-screen ">
    {Favorites.length ? (
      Favorites.map((b, key) => <CardFavorite  deleteFav={deleteFav}  key={key} book={b} />)
      ) : (
        
        <div className=" col-span-1  flex justify-center items-center">
        <p className="text-center py-2 px-5 border border-blue-950 text-2xl">No hay favoritos aún </p>
      </div>
     )}
    </div>
     </>
   
  )
}

export default ListFavorites