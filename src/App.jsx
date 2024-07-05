import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Products from './Components/Products'

function App() {

  const [data, setData] = useState({})
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    let result = await fetch('https://dummyjson.com/products?limit=100');
    result = await result.json();
    // console.log(result.products)
    setData(result.products);
  }

  function prevHandler(){
    if(page!=1){
      setPage(page-1)
    }
  }
  function nextHandler(){
    if(page!=11){
      setPage(page+1)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h1 className='h1'>React Pagination</h1>
        <div className="container">
          <Products data={data} page={page}/>
        </div>
        <div className='buttons-container'>
          <button onClick={()=>setPage(1)} disabled={page==1?true:false}>First</button>
          <button onClick={()=>prevHandler()} disabled={page==1?true:false}>Prev</button>
          <div>
            <button onClick={(e)=>e.preventDefault()} className='active-button'>{page}</button>
          </div>
          <button onClick={()=>nextHandler()} disabled={page==Number.parseInt(data.length/9)?true:false}>Next</button>
          <button onClick={()=>setPage(Number.parseInt(data.length/9))} disabled={page==Number.parseInt(data.length/9)?true:false}>Last</button>
        </div>
    </div>
  )
}

export default App
