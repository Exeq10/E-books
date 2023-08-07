import React from 'react'

function AddBook() {
  return (
    <form>


{/* nombre del libro  */}
    <div>
        <label > 

            Libro 


        </label>

        <input type="text" name='nombre' />
    </div>
{/* numero de ISBN  */}
    <div>
        <label > 

            ISBN 


        </label>

        <input type="number" name='ISBN' />
    </div>
{/* nombre del autor  */}
    <div>
        <label > 

            Autor 


        </label>

        <input type="text" name='autor' />
    </div>
{/* paginas   */}
    <div>
        <label > 

            Páginas 


        </label>

        <input type="number" name='paginas' />
    </div>

{/* Año de publicacion   */}
    <div>
        <label > 

            Año de publicación 


        </label>

        <input type="number" name='año' />
    </div>




<input type="submit" value={'Añadir'} />



    </form>
  )
}

export default AddBook