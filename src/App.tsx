
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch('https://api.mymarket.ge/api/ka/products', {method:'POST'}).then(response => response.json()).then(data => {
      console.log('data', data?.data?.Prs)
      setProducts(data?.data?.Prs)
    })

  }, []) 

  console.log('products',products);
  

  return (
    <>
      <div >
        {products?.map((product:any) => <div style={{marginBottom:'10px'}}>
          {product?.title}
        </div>)}
      </div>
    </>
  )
}

export default App
