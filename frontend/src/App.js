import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Content from "./components/Content";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

const Title = styled.h1`
  color: white;
  margin-top: 1rem;
`;

function App() {
  return (
    <>
      <Title>User-Manager</Title>
      
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
