
import "./LoginPage.css"

import { useState } from "react"
const LoginPage = (props) => {
      
      // 2 - Object
      const [userInput, setUserInput] = useState({
            // email: '',
            pass: '',
            age: ''
      })

      // 1) slice - кусочек
      const [email, setEmail] = useState('')
      // const [pass, setPass] = useState('')
      // const [age, setAge] = useState('')

      const emailChangeHandler = (event) => {
            setEmail(event.target.value)
      }

      // 2) Object
      const passChangeHandler = (event) => {
            setUserInput({
                  // ...userInput - эгер башка данныйлар болуп калса чачып бериш учун (undefined)
                  pass: event.target.value
            })
      }

      // 3) prevState
      const agelChangeHandler = (event) => {
            setUserInput((prevState) => {  // акыркы состояние
            return {     // жаны состояние
                  ...prevState,
                  age: event.target.value
            }
         })

      
      }

      const submitHandler = (event) => {
            event.preventDefault()
           console.log(email);
           console.log(userInput.pass);
           console.log(userInput.age);
      
      }
      return(
             
              <form onSubmit={submitHandler}>
              <h1>{props.text}</h1>
              <label>Email</label>
              <input type ='email' onChange={emailChangeHandler}></input>
               {/* <Input onChange={emailChangeHandler} /> */}
               <label htmlFor="">Password</label>
               <input type ='password' onChange={passChangeHandler}></input>
               {/* <Input onChange={passChangeHandler}/> */}
               <label htmlFor="">Age</label>
               <input type="number" onChange={agelChangeHandler}/>
               <button type="submit">Login</button>
              
               <a href="https://www.youtube.com/m">{props.a}</a>
               </form>
                
      )
}

export default LoginPage