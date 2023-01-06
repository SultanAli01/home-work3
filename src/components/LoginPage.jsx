import Input from "./ui/input/Input"
import "./LoginPage.css"
import Button from "./ui/input/btn/Button"
const LoginPage = (props) => {
      return(
             <div className="container">
              <h1>{props.text}</h1>
               <Input />
               <Input />
               <Button btn={props.btn} />
               <a href="https://www.youtube.com/m">{props.a}</a>
             </div>
      )
}

export default LoginPage