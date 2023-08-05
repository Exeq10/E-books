import { useState, useEffect, useContext, Children } from "react";
import { BooksContext } from "../context/BooksProvider";
import { Link, Outlet } from "react-router-dom";
import Search from "./Search";
import Modal from "../Modal";
import Genders from "./Genders";

/* componente de la navegacion  */
function Layout() {
  /* contexto  */
  const { Favorites, setLen, len, books } = useContext(BooksContext);

  /* regula el menu desplegable */
  const [visible, setVisible] = useState(false);
  const [visibleFav, setVisibleFav] = useState(false);

  const date = new Date

  const year = date.getFullYear()



  

  useEffect(() => {
    Favorites.length ? setLen(Favorites.length) : setLen(0);
  }, [Favorites]);

  return (
    <>
      <section className="w-full flex  px-4 bg-blue-950  ">
        <Link to={"/"}>
          <picture>
            <img src="2.svg" alt="" className="w-44 h-20" />
          </picture>
        </Link>

        <nav className="flex w-full justify-end bg-blue-950 text-white items-center px-3">
          <ul className="flex gap-3 p-3 text-md">

            <li> <Link to={"/"}> Inicio</Link>{" "}</li>
        
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setVisible(true)}
            >
              Géneros
              {visible ? (
                <ul
                  onMouseLeave={() => setVisible(false)}
                  className="flex flex-col justify-center items-center z-10 py-4 absolute top-4 text-black  w-32 mt-3 gap-2 text-center bg-white shadow-md rounded-sm  "
                >

                  <Genders/>
                 
                </ul>
              ) : (
                ""
              )}{" "}
              {visible ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </li>
           
            <li
              onMouseEnter={() => setVisibleFav(true)}
              onMouseLeave={() => setVisibleFav(false)}
            >
              <Link to={"/favoritos"}> Mi Lista</Link>{" "}
              <span className="bg-white text-blue-950 rounded-full px-3 ">
                {len}
              </span>{" "}
              <div
                className={`w-auto absolute shadow-md  ${
                  visibleFav ? "flex" : "hidden"
                } gap-2 flex-col bg-white px-3 py-2 z-10`}
              >
                {Favorites.length > 0 ? (
                  Favorites.map((fav, key) => (
                    <div
                      key={key}
                      className="flex justify-start items-center gap-1"
                    >
                      <img src={fav.book.cover} alt="logo" className="w-8" />
                      <h4 className="text-black">{fav.book.title}</h4>
                    </div>
                  ))
                ) : (
                  <p className="text-blue-950">No hay libros favoritos</p>
                )}

                {Favorites.length > 0 ? (
                  <Link
                    to={"/favoritos"}
                    className="text-blue-950 text-center hover:text-blue-700"
                  >
                    Ver Todos
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </li>
          </ul>
        <Search books={books}/>
        </nav>

  
      </section>


      <Outlet />


      <footer className="w-full py-3 px-3 bg-blue-950 mt-3 text-center">

                    <p className="text-white">
                    Sitio creado por Exequiel Schiavo  ©{year}
                    </p>

      </footer>
    </>
  );
}

export default Layout;
