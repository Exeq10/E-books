
import { BooksContext } from "./context/BooksProvider";
import { useContext } from "react";
import Rating from "./Base/Rating";


function CardBook({ book}) {
  const { title, ISBN, year, cover, genre, synopsis,rate } = book.book;

  const {selectFavorite ,viewRate} = useContext(BooksContext)

  return (
    <div className="border p-1 flex flex-col   gap-2 rounded-md shadow-md bg-white  ">
      <div className="relative">

    
        <picture className="w-full flex justify-center items-center">
          <img
            src={cover}
            alt={`Libro ${title}`}
            className="w-60  h-72 drop-shadow-lg rounded-md"
          />
        </picture>
      </div>

      <div>
        <p className="text-center mb-2">{title} </p>
        <Rating rate={Math.floor(rate)}/>
      </div>

    {/* seleccionar favorito */}
          <button
            className="mt-4 w-5/12 mx-auto  rounded-md text-red-700 hover:bg-red-700 hover:text-white duration-300 ease-in px-3 py-1"
            onClick={() => selectFavorite(ISBN)}
          >
            <i className="fa-regular fa-heart"></i> {" "}
          </button>
       
    
 
    </div>
  );
}

export default CardBook;
