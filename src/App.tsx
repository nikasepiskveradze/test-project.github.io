
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch('https://api.mymarket.ge/api/ka/products', {method:'POST'}).then(response => response.json()).then(data => {
      console.log('data', data?.data?.Prs)
      setProducts(data?.data?.Prs)
    })

    fetch('https://api3.myhome.ge/api/ka/auction', {method:'GET'}).then(response => response.json()).then(data => {
      console.log('my home data', data)
    })

    // https://api-statements.tnet.ge/v1/statements?currency_id=1&page=1

    // https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=&CurrencyID=3&MileageType=1&Page=1

    // https://api.myparts.ge/api/ka/products/get

    // https://api.myjobs.ge/api/ka/public/vacancies/v2?job_types=&countries=&company_id=&keyword=&count=16&page=1

    fetch('https://api2.myauto.ge/ka/products?TypeID=0&ForRent=0&Mans=&CurrencyID=3&MileageType=1&Page=1', {method:'GET'}).then(response => response.json()).then(data => {
      console.log('my auto data', data)
    })

    fetch('https://api.myparts.ge/api/ka/products/get', {method:'POST'}).then(response => response.json()).then(data => {
      console.log('my parts data', data)
    })

    fetch('https://api.myjobs.ge/api/ka/public/vacancies/v2?job_types=&countries=&company_id=&keyword=&count=16&page=1', {method:'GET'}).then(response => response.json()).then(data => {
      console.log('my jobs data', data)
    })

    // https://api.swoop.ge/api/category/filters?cat_id=4&LangID=1

    fetch('https://gateway.tkt.ge/v2/movies/list?api_key=7d8d34d1-e9af-4897-9f0f-5c36c179be77', {method:'GET'}).then(response => response.json()).then(data => {
      console.log('tkt', data)
    })

    fetch('https://api.swoop.ge/api/category/filters?cat_id=4&LangID=1', {method:'GET'}).then(response => response.json()).then(data => {
      console.log('swoop', data)
    })


  }, []) 

  console.log('products',products);
  

  return (
    <>
      <div >
        {products?.map((product:any) => <div key={product.product_id} style={{marginBottom:'10px'}}>
          {product?.title}
        </div>)}
      </div>
    </>
  )
}

export default App
