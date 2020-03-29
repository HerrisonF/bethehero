import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './style.css';
import api from '../../services/api';

export default function Profile() {

    const history = useHistory();

    const ongName = localStorage.getItem('name');
    const [list, setList] = useState([]);

    async function handleDeleteIncident(id){
        try{
            //await api.delete(`incidents/${id}`);
            setList(list.filter(item => item.id !== id));
        }catch(err){
            alert('Erro ao deletar, tente novamente');
        };
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    useEffect(() => {
        api.get('5e80c2f63000002d006f9581',
            { headers: {Authorization:'1234'} }
        ).then(response => {
            setList(response.data);
            console.log('AQUI' + response.data);
        });
    }, [ongName]);

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} />
                <span>Bem vindo, {ongName}</span>
                <Link to="/incident/new" className="button">Cadastrar novo Caso</Link>
                <button onClick={handleLogout} type="button" >
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {
                    list.map(item => (
                        <li key={item.id}>
                            <strong>CASO:</strong>
                            <p>{item.title}</p>
                            <strong>DESCRIÇÃO:</strong>
                            <p>{item.description}</p>
                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(item.value)}</p>
                            <button type="button" onClick={() => handleDeleteIncident(item.id)}>
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
