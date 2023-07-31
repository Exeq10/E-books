import { useParams } from "react-router-dom";

import BooksProvider, { BooksContext } from "./context/BooksProvider";
import { useContext } from "react";

function Categoria() {
  const {  books,filtroCard} = useContext(BooksContext);
  const { categoria } = useParams();

  return (

    <>
  <div className="mt-12 ml-10"> <h2 className="text-2xl">Lista de libros de <span className="text-blue-950 font-bold">{categoria}</span> </h2>

<h3 className="text-lg mt-2 text-gray-500">Aquí encontrarás todos tus libros de {categoria} </h3>

</div>
  
  <div className="w-12/12 flex flex-wrap justify-center gap-4 mt-14 ">



{
  filtroCard(categoria,books)[0]
}


  </div>;
  </>
  )
}

export default Categoria;
