import { useState, useEffect, useContext, Children } from "react";
import { BooksContext } from "../context/BooksProvider";
import { Link, Outlet } from "react-router-dom";

/* componente de la navegacion  */
function Layout() {

  /* regula el menu desplegable */
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    if (visible) {
      setVisible(false);
    } else if (!visible) {
      setVisible(true);
    }
  };

  const { Favorites, setLen, len } = useContext(BooksContext);

  useEffect(() => {
    if (Favorites.length) {
      setLen(Favorites.length);
    }
  }, [Favorites]);

  return (
    <>
      <section className="w-full flex  px-4 bg-blue-950  ">
        <Link to={'/'}>
          <picture>
            <img src="E-books.svg" alt="" className="w-36 h-20" />
          </picture>
        </Link>

        <nav className="flex w-full justify-end bg-blue-950 text-white items-center px-3">
          <ul className="flex gap-3 p-3 text-md">
            <li>Más Leídos</li>
            <li className="relative cursor-pointer" onClick={handleVisible}>
              Géneros
              {visible ? (
                <ul className="flex flex-col justify-center items-center z-10 pt-4 absolute top-4 text-black  w-32 mt-3 gap-2 text-center bg-white shadow-md rounded-sm  ">
                  <li className="w-full hover:bg-blue-950 hover:text-white">
                    <Link to={"Terror"}>Terror</Link>
                  </li>
                  <li className="w-full hover:bg-blue-950 hover:text-white">
                    <Link to={"Fantasía"}>Fantasía</Link>
                  </li>
                  <li className="w-full hover:bg-blue-950 hover:text-white">
                    <Link to={"Ciencia ficción"}>Ciencia Ficción</Link>
                  </li>

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
            <li>Más Nuevos</li>
            <li>
              <Link to={'/favoritos'}> Mi Lista</Link>{" "}
              <span className="bg-white text-blue-950 rounded-full px-3">
                {len}
              </span>{" "}
            </li>
          </ul>
          <div className="flex gap-2">
            <input
              type="text"
              name="search"
              id="search"
              className="ml-4 rounded-md outline-none pl-3 text-black border "
            />
            <button className=" px-2 py-1 rounded-md bg-white text-blue-950  hover:bg-white duration-300 ease-in">
              Buscar
            </button>
          </div>
        </nav>
      </section>

      <Outlet />
    </>
  );
}

export default Layout;
