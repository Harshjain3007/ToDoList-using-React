import React, { useState } from 'react'

function ToDoList() {
  const [activity,setActivity]  = useState("")

  const [listData,setListData] = useState([])

  function addActivity(){
    // setListData([...listData,activity])
    // console.log(listData);
      if(activity.trim()!==""){
    setListData((listData)=>{
      const updatedList = [...listData,activity]
      console.log(updatedList);
      setActivity('')
      
      return updatedList
    })
      }  
  }


  function removeActivity(i){
       const updatedListData = listData.filter((element,id)=>{
        return i!=id
       })
       setListData(updatedListData)
  } 


  function removeAll(){
       setListData([])
  }


  return (
    <>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type="text" placeholder='Add Activity' value = {activity} onChange={(e)=>{
          setActivity(e.target.value)}}/ >
          <button onClick={addActivity}>Add</button>
          <p className='List-heading'>Here is your List:{")"}</p>
          {listData!=[]&&listData.map((data,i)=>{
            return (
              <>
                <p key={i}>
                    <div className='listData'>{data}</div>
                    <div className='btn-position'> <button onClick={()=>removeActivity(i)}>
                    remove(-)</button></div>
                </p>
              </>
            )
          })}
          {listData.length>=1 &&  <button onClick={removeAll}>Remove All</button> }
      </div>
    </> 
  )
}

export default ToDoList