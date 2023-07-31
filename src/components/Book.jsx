
import { BooksContext } from "./context/BooksProvider";
import { useContext } from "react";
function Book({ book }) {
  const { title, ISBN, year, cover, genre, synopsis,rate } = book.book;



  const {selectFavorite,ReadBooks, viewRate} = useContext(BooksContext)




  return (
    <div className="  flex flex-col w-52  gap-2 rounded-md  bg-white shadow-md  group hover:bg-gray-100  hover:overflow-hidden ">
      <div className="relative">
        <picture>
          <img
            src={cover}
            alt={`Libro ${title}`}
            className=" h-72 drop-shadow-lg w-full rounded-md mx-auto  group-hover:scale-105 duration-300 "
          />
        </picture>
      </div>
   
      <div>
        <p className="text-center font-medium mt-2 ">{title} </p>
      </div>

      {viewRate(rate)}

      <div className="flex mb-3">
      <button
        className="mt-4 w-5/12 mx-auto  rounded-md bg-white border border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white duration-150 ease-in px-3 py-1"
        onClick={()=>ReadBooks()}
      >
        Leer{" "}
      </button>

        {/* seleccionar favorito */}
      <button
        className="mt-4 w-5/12 mx-auto  rounded-md bg-white  text-red-700 border border-red-700 hover:bg-red-700 hover:text-white duration-300 ease-in px-3 py-1"
        onClick={() => selectFavorite(ISBN)}
      >
        <i className="fa-regular fa-heart"></i>{" "}
      </button>
      </div>
    </div>
  );
}

export default Book;
