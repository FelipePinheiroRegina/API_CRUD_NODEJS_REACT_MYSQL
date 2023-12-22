import GlobalStyle from "./styles/global";  // MEU ESTILO
import { toast, ToastContainer } from "react-toastify"; // ALERTA NA TELA DO USUÁRIO
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/form";
import Grid from "./components/grid";
import { useState } from "react";
import axios from "axios";


const Container = styled.div`
  width: 100%;
  max-width: 880px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

const getUsers = async () => {
  try {
    const res = await axios.get("http://localhost:8800");
    setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
  } catch (error) {
    toast.error(error);
  }
}

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useStates(null);

  return (
    // autoclose = 3000 -> fecha com 3 segundos. posição para aparecer em baixo na esquerda.
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form/>
        <Grid/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/> 
      < GlobalStyle/>
      
      
    </> 
  )
}

export default App;
