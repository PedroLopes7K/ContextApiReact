import { useState, createContext } from 'react'

export const UserContext = createContext({})

function UserProvider({ children }) {
  const [aluno, setAluno] = useState('Sujeito Programador')
  const [qtdAlunos, setQtdAlunos] = useState(86)
  return (
    <UserContext.Provider value={{ aluno, setAluno, qtdAlunos }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
