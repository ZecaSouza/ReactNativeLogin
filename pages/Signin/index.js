import React from 'react';
import { KeyboardView, 
    Title, 
    Container, 
    Input, 
    ButtonSubmit, 
    TextSubmit 
} from './styles';
import Header from '../../components/Header';

function Signin() {
    return(
        <KeyboardView>
            <Header />
            <Container>
                <Title>Login</Title>
                <Input 
                    placeholderTextColor = "#fff"
                    placeholder = "E-mail"
                />
                <Input 
                    placeholderTextColor = "#fff"
                    placeholder = "Senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>
                        Entrar
                    </TextSubmit>
                </ButtonSubmit>
            </Container>

        </KeyboardView>

    )   
}

export default Signin;