import {React ,useState} from 'react'
import SignUp from '../src/components/SignUp'

const App = () => {
  const [color, setcolor] = useState("#cccc")
  return (
    <>
   
    <div className='w-full h-screen' style={{backgroundColor: color}}>
            <div className=' mx-auto bg-white rounded-full w-fit px-10 h-14 fixed bottom-10 flex gap-x-5 flex-wrap justify-center items-center inset-x-0'>
              <div className="text-white h-fit px-5 py-2 rounded-full shadow-lg" onClick={()=>{
                setcolor("red")
              }}  style={{backgroundColor: "red"}}>
                Red
              </div>
              <div className="bg-red-600 text-white h-fit px-5 py-2 rounded-full shadow-lg" onClick={()=>{
                setcolor("green")
              }}  style={{backgroundColor: "green"}}>
                Green
              </div>
              <div className="bg-red-600 text-white h-fit px-5 py-2 rounded-full shadow-lg" onClick={()=>{
                setcolor("blue")
              }}  style={{backgroundColor: "blue"}}>
                blue
              </div>
              
            </div>
    </div>

    </>
  )
}

export default App
