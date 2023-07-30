/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Book from "../Book";

import {toast} from 'react-toastify'



const BooksContext = createContext();

function BooksProvider({ children }) {
  /* lista total de libros  */
  const [books, setBooks] = useState([]);

  const [Favorites, setFavorites] = useState([]);

  const [error, setError] = useState([]);



/* Notificacion
 */  const notify = () => toast.success('Agregado a la lista ',  {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: 0,
theme: "light",
});


/* Notificacion
 */  const notifyError = () => toast.error('El libro está en la lista',  {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: 0,
theme: "light",
});





  /* funcion que trae todos los libros  */
  const getBooks = async () => {
    try {
      let res = await fetch("http://localhost:3000/library");

      let data = await res.json();

      setBooks(data);
    } catch (error) {
      console.log(error.message);
      setError([error.mesagge]);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  /* selecciona el favorito */

  const selectFavorite = (ISBN) => {
    const BookFavorite = books.find((book) => book.book.ISBN == ISBN);

    if (Favorites.find((b) => b.book.ISBN == BookFavorite.book.ISBN)) {
      

      notifyError()
    } else {
      setFavorites([BookFavorite, ...Favorites]);

      notify()

      /* seteo el array de libros original con los resultados restandoles los que se agregan a favoritos */
      setBooks(books.filter((b) => b.book.ISBN != BookFavorite.book.ISBN));
    }
  };

  /* estado de carga  */

  const [loading, setLoading] = useState(false);

  /* Funcion que filtra donde se le pasan parametros de array a filtrar y categoria  */
  const filtro = (cat, arr) => {
    const categoria = arr.filter(
      (book) => book.book.genre == `${cat}` && book.book.rate <= 3.5
    );

    return [
      categoria.map((book, key) => (
        <SwiperSlide className=" flex justify-center items-center" key={key}>
          {" "}
          <Book book={book} />{" "}
        </SwiperSlide>
      )),
      categoria.length,
    ];
  };
  /* Funcion que filtra donde se le pasan parametros de array a filtrar y categoria  */
  const filtroCard = (cat, arr) => {
    const categoria = arr.filter((book) => book.book.genre == `${cat}`);

    return [categoria.map((book, key) => <Book book={book} key={key} />)];
  };

  /* Estado que se modifica segun cantidad de libro que hay en los filtros  */
  const [len, setLen] = useState(0);

  const ReadBooks = () => {
    console.log("Leyendo");
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        error,
        selectFavorite,
        Favorites,
        loading,
        setLoading,
        setLen,
        len,
        ReadBooks,
        filtro,
        filtroCard,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;

export { BooksContext };
