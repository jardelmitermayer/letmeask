import { Link } from 'react-router-dom'
import { FormEvent, useState } from 'react';

import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  //const { user } = useAuth();

  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    console.log(newRoom)
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="Ilustração simulando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let me ask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input type="text"
              placeholder="Nome da sala"           
              value={newRoom}
              onChange={event => setNewRoom(event.target.value)} 
            />
            <Button type="submit">
              Criar na sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}