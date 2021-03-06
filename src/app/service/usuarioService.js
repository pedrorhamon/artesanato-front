import ApiService from '../apiservice'

import ErroValidacao from '../exception/ErroValidacao'

class UsuarioService extends ApiService {

    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }

    buuscarPorId(id){
        return this.get(`/${id}`);
    }

    salvar(usuario){
        return this.post('', usuario);
    }

    validar(usuario){
        const erros = []

        if(!usuario.nome){
            erros.push('O campo Nome é obrigatório.')
        }

        if(!usuario.email){
            erros.push('O campo Email é obrigatório.')
        }else if( !usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) ){
            erros.push('Informe um Email válido.')
        }

        if(!usuario.celular) {
            erros.push('O campo telefone é obrigatório.')
        }

        if(!usuario.cpf) {
            erros.push('O campo CPF é obrigatório.')
        } else if (!usuario.cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)) {
            erros.push('Informe um CPF válido.')
        }

        if(!usuario.senha || !usuario.senhaRepeticao){
            erros.push('Digite a senha 2x.')
        }else if( usuario.senha !== usuario.senhaRepeticao ){
            erros.push('As senhas não batem.')
        }        

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}

export default UsuarioService;