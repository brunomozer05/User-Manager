import styled from 'styled-components';
import GlobalStyle from "./components/GlobalStyle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form.js";
import Info from "./components/Info.js";

function App() {
  return (
    <>
      <Form/>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
