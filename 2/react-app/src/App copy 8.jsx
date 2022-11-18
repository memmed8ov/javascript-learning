import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {

  const [books, setBooks] = useState([]);


  useEffect(() => {
    axios.get('https://gutendex.com/books')
      .then(response => {
        setBooks(response.data.results)
      })
  }, [])

  return (

    <div>
      <table className='container table bordered table-info'>
        <thead>
          <tr>
            <th>title</th>
            <th>download_count</th>
            <th>subject</th>
            <th>translator</th>
          </tr>
        </thead>

        <tbody>
          {books.map(item => <tr>
            <td>{item.title}</td>
            <td>{item.download_count}</td>
            <td>
              {item.subjects.map(items =>
                <div>

                  <b>
                    {items}

                  </b>
                </div>
              )}
            </td>
            <td>
              {item.translators.map(itemo =>
                <div>

                  <b>
                    {itemo.name}
                    {itemo.birth_year}
                    {itemo.eath_year}
                  </b>
                </div>
              )}
            </td>




          </tr>)}
        </tbody>

      </table>
    </div>
  )
}

export default App;
