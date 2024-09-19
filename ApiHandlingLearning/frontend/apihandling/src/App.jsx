
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {

  // const [products, error, loading] = customReactQuery('http://localhost:3000/api/products')
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController()
      ; (async () => {
        try {
          setLoading(true)
          setError(false)
          const response = await axios.get("http://localhost:3000/api/products?search=" + search, { signal: controller.signal })
          console.log(response.data)
          setproducts(response.data)
          setLoading(false)
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('Request Canceled', error.message)
            return
          }
          setError(true)
          setLoading(false)
        }
      })()
    return () => {
      controller.abort()
    };
  }, [search]);

  // if (error) {
  //   return <h2>Something went wrong</h2>
  // }
  // if (loading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>}
      <h1>hello World</h1>
      <input type="text" name="search" value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Numbers of products: {products.length}</h2>
    </>
  )
}

export default App

// const customReactQuery = (urlPath) => {
//   const [products, setproducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     ; (async () => {
//       try {
//         setLoading(true)
//         setError(false)
//         const response = await axios.get(urlPath)
//         console.log(response.data)
//         setproducts(response.data)
//         setLoading(false)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//       }
//     })()
//     return () => {
//     };
//   }, []);

//   return [products, error, loading]
// }