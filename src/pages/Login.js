import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.svg';
import api from '../services/api';

export default function Login({history}){
    const [username, setUsername] = useState(''); // aqui vamos armazenar as informações do input
   async function handleSubmit(e){
        // essa função vai pegar o valor que o usuario enviar toda vez que clicar no button
        e.preventDefault();

        const response = await api.post('/devs',{
            username, 
        });
        
        const { _id } = response.data;
        history.push(`/dev/${_id} ` );
    }
    return ( 
        <div className="login-container">
            <form onSubmit={handleSubmit} > 
                <img src={logo} alt="Tindev" />
                <input  placeholder="Digite seu usuário" value={username} onChange={e => setUsername(e.target.value)} />
                {/* //aqui a gente pegou o valor com o e.target.value e jogou dentro do setUsername */}
                <button type="submit">Enviar</button>
            </form>
        </div>
    
    );
} 
 
