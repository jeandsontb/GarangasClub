import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import S from './styles';

import useApi from '../../services/apiLaravel';

export default () => {

    const api = useApi();
    const history = useHistory();

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkLogin = async () => {
            if(api.getToken()){
                setLoading(true);
                const permission = api.getPermissionUser(); 
                const result = await api.validateToken();
                setLoading(false);
                if(result.error === '' && permission === '1') {
                    history.push('/insertions');
                } else {
                    alert(result.error+' Essa conta não tem permissão para acessar a área de administrador');
                    history.push('/admin');                    
                }
            } else {
                history.push('/admin');
            }
        }   
        checkLogin();
    }, []);

    const handleLoginButton = async () => {
        if(cpf && password) {
            const result = await api.login(cpf, password);
            let permissionUser = result.user.admin;
            if(result.error === '' && permissionUser === 1 ) {
                localStorage.setItem('permission', result.user.admin);
                localStorage.setItem('token', result.token);
                history.push('/insertions');
            } else {
                alert(result.error !== '' ? result.error : 'Usuário não tem permissão para acessar essa área');
            }
        } else {
            alert("digite os dados para acessar");
        }
    }

    return(
        <S.Container>
            
            <S.Box>
                <S.Login>
                    <S.TextLogin>LOGIN</S.TextLogin>
                    <S.Label>CPF</S.Label>
                    <S.Input type="text" value={cpf} disabled={loading} onChange={e => setCpf(e.target.value)} placeholder="Digite o CPF" />
                    <S.Label>Senha</S.Label>
                    <S.Input type="password" value={password} disabled={loading} onChange={e => setPassword(e.target.value)} placeholder="Digite a senha" />
                    <S.BoxButton>
                        <S.Button type='button' onClick={handleLoginButton} disabled={loading} >
                            {loading ? 'ENTRANDO' : 'ENTRAR'}
                        </S.Button>
                    </S.BoxButton>
                </S.Login>

                <S.Information>
                    <S.Text>ADMINISTRADOR</S.Text>
                    <S.TextInformation>Apenas pessoas autorizadas poderão acessar essa área
                         administrativa, favor verificar com a presidência.</S.TextInformation>
                </S.Information>
            </S.Box>
        </S.Container>

    );
}