import GlobalStayles from "./styles/global.js";  // MEU ESTILO
import { toast, ToastContainer } from "react-toastify"; // ALERTA NA TELA DO USUÁRIO
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

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

function App() {
  return (
    // autoclose = 3000 -> fecha com 3 segundos. posição para aparecer em baixo na esquerda.
    <>
      <Container>
        <Title>USUÁRIOS</Title>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/> 
      < GlobalStayles/>
    </> 
  )
}

export default App;
