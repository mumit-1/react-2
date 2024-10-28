import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConnectedPost from './ConnenctedPost'

function App() {
  const [post, setPost] = useState([])
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>setPost(data))
 },[])
  return (
    <>
     
      <h3>Practicing React</h3>
    <p>posts:{post.length}</p>
      {
        post.map(data=><ConnectedPost info={data}></ConnectedPost>)
      }
    </>
  )
}

export default App
