import Nome from '../Nome'
import { UserContext } from '../../Contexts/user'
import { useContext } from 'react'

function Alunos() {
  const { qtdAlunos } = useContext(UserContext)
  return (
    <div>
      <h2> Quantidade de alunos: {qtdAlunos}</h2>
      <Nome />
    </div>
  )
}

export default Alunos
