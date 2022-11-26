import { Div, Titulo , SendButton} from "./styled";

function TelaUsuarioCadastrado(props) {
    return (
        <Div>
        <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
        <SendButton onClick={() => props.trocaTela(1)}>Voltar</SendButton>
      </Div>
    )
}

export default TelaUsuarioCadastrado;