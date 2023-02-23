import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [input,setIuput] = useState('')
  // const [edit,setEdit] = useState(false)
  const handleChange = (e) =>{
    setIuput({id:new Date(),name:e.target.value,edit:false})
  }
  return (
    <div className="App">
      <input type="text" onChange={handleChange}  value={input.name}/>
      <button onClick={(e)=>{
        setData([...data,input])
        setIuput({id:'',name:'',edit:false })

      }}>送出</button>
      {data.map((v,i)=>{
        return (
          <>
          <p key={v.id}>{v.name}</p>
          <button onClick={()=>{
            const newdata = data.filter((v1)=>{
              return v.id !== v1.id
            })
            setData(newdata)
          }}>刪除</button>
          <input type="text" className={v.edit?'edit':'edited'} onBlur={(e)=>{
            const newdata = [...data]
            newdata.map((v3,i3)=>{
              if(v.id === v3.id){
                v3.name = e.target.value
                v3.edit = false
              }
              setData(newdata)
            })
          }}/>
          <button onClick={()=>{
            const newdata = [...data]
             newdata.map((v2,i2)=>{
              if(v.id === v2.id){
                return v2.edit = true
              }
              setData(newdata)
             })

            
              
          }}>編輯</button>
          </>
         
        )
      })}
    </div>
  )
}

export default App
