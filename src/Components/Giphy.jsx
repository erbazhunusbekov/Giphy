import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'


const Giphy = () => {

  const [data, setData] = useState([])
  const [text, setText] = useState('')
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=1LaLYtzbwXej37HXcnWaaBTCwsr4Rz79&rating=g&limit=5')
      .then((response) => {
        setData(response.data.data)
        console.log(response.data.data)
        setLoad(false)
      })
  }, [])

  const btnS = () => {
    setLoad(true)
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=1LaLYtzbwXej37HXcnWaaBTCwsr4Rz79&q=${text}&limit=5`)
      .then((response) => {
        setData(response.data.data)
        console.log(response.data.data)
        setLoad(false)
      })
  }

  
  
  return (
    <div>
      <h1>
        Giphy
      </h1>

      <div >
        <input onChange={(e) => setText(e.target.value)} type={'text'} />
        <button onClick={() => btnS()} >
          Search
        </button>
      </div>

      <div>
        {!load
          ?
          data.map((v) => {
            return <img  src={v.images.original.url} />
          })
          :
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      </div>

    </div>
  )
}

export default Giphy