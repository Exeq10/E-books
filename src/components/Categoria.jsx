import { useParams } from "react-router-dom";

import BooksProvider, { BooksContext } from "./context/BooksProvider";
import { useContext } from "react";

function Categoria() {
  const {  books,filtroCard} = useContext(BooksContext);
  const { categoria } = useParams();

  return <div className="w-12/12 flex flex-wrap justify-center gap-4 mt-14 ">



{
  filtroCard(categoria,books)[0]
}


  </div>;
}

export default Categoria;
