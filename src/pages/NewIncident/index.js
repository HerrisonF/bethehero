import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './style.css';
import api from '../../services/api';

export default function Incident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const data = {
        title,
        description,
        value
    }

    async function handleNewIncident(e){
        e.preventDefault();
        try{
            await api.post('5e80c929300000bd386f959f', data)
            history.push('/profile');
        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente.');
        }
    }

    return(
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente</p>
                    <Link to="/profile" className="back-link">
                    <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>  
                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input type="text" 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}