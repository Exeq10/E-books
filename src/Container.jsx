import Layout from "./components/Base/Layout";

import ListBooks from "./components/ListBooks";
import ListFavorites from "./components/ListFavorites";
import { useRef } from "react";

function Container() {
  const myRef = useRef(null);

  const scrollToElement = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="  w-full h-screen flex bg-gray-100 justify-center gap-28 items-center ">
        <div className="text-center flex  flex-col p-5 items-center   h-4/6 w-4/12">
          <picture>
            <img src="/1.svg" alt="logo" className="w-72 " />
          </picture>
          <h1 className="font-bold text-black text-2xl drop-shadow-lg">
            "Leer es soñar con los{" "}
            <span className="text-blue-950">ojos abiertos."</span>
          </h1>
          <h2 className="font-semibold  text-lg mt-3 text-gray-500">
            Llevá tus <span className="text-blue-950">libros</span> a donde
            vayas.
          </h2>

          <button
            onClick={scrollToElement}
            className="px-6 w-6/12  py-1 bg-blue-950 text-white text-lg mt-12 rounded-md shadow-md hover:bg-white group hover:text-blue-950 duration-150 hover:scale-105  "
          >
            Comenzar <i className="ml-2 fa-solid fa-book-open"></i>
          </button>
        </div>

      
      </section>

      <ListBooks myRef={myRef} />
    </>
  );
}

export default Container;
