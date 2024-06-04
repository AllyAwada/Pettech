// Essa será a pagina inicial do projeto
import Header from "../assets/Components/Header.jsx"
import Fundo from "/fundoHome.svg"

function Home() {
  return (
    <main>
      <div><img className="w-screen fixed" src={Fundo} alt="" /></div>
      <Header />
      <div>
        <p>Hello</p>
      </div>
    </main>
  )
}

export default Home