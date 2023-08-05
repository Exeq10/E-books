import { useState } from "react";
import Modal from "../Modal";
import { useContext } from "react";
import { BooksContext } from "../context/BooksProvider";

function Search({ books }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const { notifyError, notifyInfo } = useContext(BooksContext);

  /* controla la búsqueda y filtra  */

  const handleSearchQuery = () => {
    if (query.length > 0) {
      /* busca en el array de libros el libro que sea igual al estado de búsqueda en el input */
      const res = books.filter(
        (res) => res.book.title.toLowerCase() === query.toLowerCase()
      );

      if (res.length > 0) {
        setQuery("");

        setResult(res);
      } else {
        notifyInfo("El libro no se encuentra en la lista");
        setQuery("");
      }
    } else {
      notifyError("Complete el input ");
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          name="search"
          id="search"
          className="ml-4 rounded-md outline-none pl-3 text-black border "
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button
          onClick={() => handleSearchQuery()}
          className=" px-2 py-1 rounded-md bg-white text-blue-950  hover:bg-blue-500 hover:text-white duration-300 "
        >
          Buscar
        </button>
      </div>

      {result.length > 0 ? <Modal setResult={setResult} result={result} /> : ""}
    </>
  );
}

export default Search;
