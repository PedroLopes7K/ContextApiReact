import { useContext } from 'react'

import { UserContext } from '../../Contexts/user'

function Nome() {
  const { aluno, setAluno } = useContext(UserContext)
  return (
    <div>
      <span style={{ color: '#FF0000' }}>Bem vindo: {aluno} </span>
      <br />
      <button onClick={() => setAluno('PEDRO HENRIQUE')}>Trocar nome</button>
    </div>
  )
}

export default Nome
