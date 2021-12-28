import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import LoadingSpinner from '../LoadingSpinner';
import { FormContact, FormContainer } from './styles';

function Form() {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ message, setMessage ] = useState('');

  const [ loading, setLoading ] = useState(false);

  async function handleSubmit(event){
    event.preventDefault();

    if(!nome || !email || !phone || !message){
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: theme.white
        }
      });

      return;
    }

    try {
      setLoading(true)
      await sendContactMail(nome, email, phone, message);
      setNome('');
      setEmail('');
      setPhone('');
      setMessage('');
      toast('Formulário enviado com sucesso!', {
        style: {
          background: '#43c900',
          color: theme.white
        }
      });
    } catch {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: theme.white
        }
      });
    } finally {
      setLoading(false)
    }

    console.log(nome, email, phone, message)
  }

  return (
    <FormContainer>
      <div className='form_cont'>
        <div className='form_txt'>
          <h2>
            Mais Dúvidas?<br/>
            Entre em contato:
          </h2>
          <p>Tem alguma dúvida? Precisando de suporte ou mais informações? Entre em contato!<br/> Ficaremos felizes em ajudar 😁</p>
        </div>
        
        <FormContact onSubmit={handleSubmit}>
          { loading ? <LoadingSpinner /> : ''}
          <input
            type='text'
            placeholder='Seu Nome'
            id='name'
            onChange={({target}) => setNome(target.value)}
            value={nome}
          />
          <input
            type='email'
            placeholder='Seu E-mail'
            id='email'
            onChange={({target}) => setEmail(target.value)}
            value={email}
          />
          <input
            type='tel'
            placeholder='Seu Whatsapp'
            id='phone'
            onChange={({target}) => setPhone(target.value)}
            value={phone}
          />
          <textarea
            type='text'
            placeholder='Sua Mensagem'
            id='message'
            onChange={({target}) => setMessage(target.value)}
            value={message}
          />
          <button
            type='submit'
            id='buttonform'
            disabled={loading}
          >
            Enviar
          </button>
        </FormContact>
      </div>
    </FormContainer>
  )
}

export default Form;
