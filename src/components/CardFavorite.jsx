function CardFavorite({ book,deleteFav }) {
  const { title, ISBN, year, cover, genre, synopsis } = book.book;
  return (
    <div className="border flex flex-col  justify-center items-center bg-white p-2">


      <div>
        <picture className="">
          <img
            src={cover}
            alt={`Libro ${title}`}
            className="max-w-xl h-60 drop-shadow-lg rounded-sm"
          />
        </picture>
      </div>

      <div className="flex justify-center items-center  flex-col gap-6">
        <h2 className="text-center text-lg font-semibold mt-2">{title} </h2>

        <div className="flex justify-start items-center gap-2">
          <label className="text-black">Año de publicación :</label>
          <p className="text-gray-400">{year} </p>
        </div>

        <div className="flex justify-start items-center gap-2  ">
          <label className="text-black">Género :</label>
          <p className="text-gray-400">{genre} </p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <button className="px-5 py-1 bg-BlueHeader text-white  rounded-md shadow-md mt-3">
          Leer
        </button>
        <button  onClick={()=> deleteFav(ISBN)} className="px-5 py-1 bg-red-800 text-white  rounded-md shadow-md mt-3">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CardFavorite;
