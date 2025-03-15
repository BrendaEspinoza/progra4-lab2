
/*import {useState} from 'react'

export function useCounter (){
  
    const [count, setCount] = useState (0)

  //const [count, setCount] = useState(0)
  const dicreaseCount = () =>  {
    if (count > 0)
      setCount ((count) =>  count -1)
  }

  const increaseCount = () => {
    setCount ((count) =>  count +1)
  }
  return {count, increaseCount,dicreaseCount}
 }*/

  import { useState, useEffect } from 'react'

  export function useCounter() {
      const FAVORITE_NUMBER = 8
  
      //iniciar en 0
      const [count, setCount] = useState(() => {
          return Number(localStorage.getItem("counter")) || 0
      })
  
      // Guardar el contador en localStorage cuando cambie
      useEffect(() => {
          localStorage.setItem("counter", count)
      }, [count])
  
      const increaseCount = () => setCount(count + 1)
      
      //No deja que pase a menos de 0
      const decreaseCount = () => {
          if (count > 0) {
              setCount ((count) =>  count -1)
          }
      }
  
      const resetCount = () => setCount(0)
  
      return { count, increaseCount, decreaseCount, resetCount, FAVORITE_NUMBER }
  }
  
