import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"

export default function App()  {
  const user = {
    name: "Alisson",
    email: "alisson@email.com"
  }

  return (
    <>
    <UserContext.Provider value={user}>
      <Header />
      <h1>Usado Contexto</h1>
      <Container>
        <p>Este é nosso app com contexto</p>
      </Container>
    </UserContext.Provider>
    <div>
      {/* nao há acesso ao contexto */}
    </div>
    </>
  )
}
