import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../context";

const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {
    login('Victor Nuñez')
  }
 
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary"
        onClick={ onLogin }
      >
      Login
      </button>
    </div>
  )
}

export default LoginPage
