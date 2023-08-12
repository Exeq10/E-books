/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Book from "../Book";

import { toast } from "react-toastify";
import { redirect } from "react-router-dom";


const BooksContext = createContext();

function BooksProvider({ children }) {

  /* lista total de libros  */
  const [books, setBooks] = useState([]);

  const [Favorites, setFavorites] = useState([]);

  const [error, setError] = useState([]);

  /* Notificacion
   */ const notify = (mensaje) =>
    toast.success(mensaje, {
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
   */ const notifyError = (mensaje) =>
    toast.error(mensaje, {
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
   */ const notifyInfo = (mensaje) =>
    toast.info(mensaje, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });

  /* Comienzan Acciones  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  /* funcion que trae todos los libros  */
  const getBooks = async () => {

   
    try {
      console.log('cargando libros');
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

  /* funcion que agrega el libro a la API  */
  const addBook = async (datos) => {


    try {
      const res = await fetch("http://localhost:3000/library", {
        /* método http para enviar datos al servidor */
        method: "POST",
        /* datos a enviar al servidor tomamos un objeto y lo convertimos en json */
        body: JSON.stringify(datos),

        headers: {
          "Content-Type": "application/json",
        },
      });

      await res.json();
    } catch (error) {
      console.log(error);
    }

   /*  notify("Libro agregado correctamente"); */

  return redirect("/")



   
  };

  /* selecciona el favorito */

  const selectFavorite = (ISBN) => {
    const BookFavorite = books.find((book) => book.book.ISBN == ISBN);

    if (Favorites.find((b) => b.book.ISBN == BookFavorite.book.ISBN)) {
      notifyError("El libro ya existe en la lista");
    } else {
      if (Favorites.length >= 4) {
        notifyInfo("Debe eliminar un libro antes de agregar más");
      } else {
        setFavorites([BookFavorite, ...Favorites]);

        notify("Agregado correctamente");

        /* seteo el array de libros original con los resultados restandoles los que se agregan a favoritos */
        setBooks(books.filter((b) => b.book.ISBN != BookFavorite.book.ISBN));
      }
    }
  };

  /* Eliminar Favorito  */

  const deleteFav = (ISBN) => {
    const BookFavoriteDelete = Favorites.find((book) => book.book.ISBN == ISBN);

    /* devuelve el libro eliminado a la lista general */
    setBooks([BookFavoriteDelete, ...books]);

    setFavorites(
      Favorites.filter((b) => b.book.ISBN != BookFavoriteDelete.book.ISBN)
    );

    notify("Eliminado Correctamente");
  };

  /* Fin Acciones   //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  /* estado de carga  */

  const [loading, setLoading] = useState(false);

  /* Funcion que filtra donde se le pasan parametros de array a filtrar y categoria  */

  /* ////////////////////////////////////////////Filtros////////////////////////////////////////////////////////////////////////////// */
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

  /* Función que filtra donde se le pasan parámetros de array a filtrar y categoría  */
  const filtroCard = (cat, arr) => {
    const categoria = arr.filter((book) => book.book.genre == `${cat}`);

    return [categoria.map((book, key) => <Book book={book} key={key} />)];
  };

  /* Estado que se modifica según cantidad de libro que hay en los filtros  */
  const [len, setLen] = useState(0);

  /* ///////////////////////////////////////////////Fin Filtros/////////////////////////////////////////////////////////// */

  /* sección rate ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

  const viewRate = (rate) => {
    const Rating = Array(Math.floor(rate));
  };

  const ReadBooks = () => {
    console.log("Leyendo");
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        error,
        addBook,
        setError,
        selectFavorite,
        Favorites,
        deleteFav,
        loading,
        setLoading,
        setLen,
        len,
        ReadBooks,
        filtro,
        filtroCard,
        viewRate,
        notifyError,
        notifyInfo,
        notify,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;

export { BooksContext };
