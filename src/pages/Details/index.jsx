import {Container} from "./styles";

import { Button } from '../../pages/components/Button'

export function Details(){

  return (
    <Container>
    <h1>Hello World!</h1>
    
    <Button title="Cadastrar" loading/>
    <Button title="Entrar"/>
    <Button title="Voltar"/>
    </Container>
    )
}