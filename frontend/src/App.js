import styled from 'styled-components';
import GlobalStyle from "./components/GlobalStyle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from './img/logo.png';
import Form from "./components/Form.js";

function App() {
  return (
    <>
      <img src={logo} height={100}/>
      <Form/>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
