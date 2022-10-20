import React, { useContext } from 'react'
import AppContext from '../../Context'

function Letter({value}) {

    const {position,setPosition,setKeyUsed, keyUsed,gridOne,setGridOne,attempt, setAttempt} = useContext(AppContext)


   
    const handleKeyPress = (value) =>{
        //handles delete button
        if (value === "Delete" & position > 0) {
            const x = keyUsed.length - 1
            const keyName = keyUsed[x].id
            console.log(keyName)
        setKeyUsed((current) => current.filter((keyUsed) => keyUsed.id !== keyName ))
        const p = position - 1
        setPosition(p)
        const newGrid  = [...gridOne]
            newGrid[attempt][position-1] = ""
            setGridOne(newGrid)
                //handles enter button
        }else if(value === 'Enter' & position === 5 && attempt <= 5){
            const x = attempt + 1
            setAttempt(x)
            setPosition(0)
        }else{ //handles rest of the keys
            if (position <= 4 && value !=='Delete' && value !== 'Enter') {
            
                setKeyUsed(current => [...current , {name: value , id: position}])
                const newGrid  = [...gridOne]
                newGrid[attempt][position] = value
                setGridOne(newGrid)
                const p = position +1
                setPosition(p)
            }else return ;
            
        }
     
     

    }


  return (
    <div className="col-span-1 ">
    <div className="bg-gray-700 py-2 px-3 m-2 text-white" onClick={() => handleKeyPress(value)} style={{cursor: "pointer"}}>
        {value}
    </div>
    </div>
  )
}

export default Letter