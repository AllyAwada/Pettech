import { Link } from "react-router-dom"
import Logo from "/logo.svg"

function Header() {
  return (
    <div className="w-screen flex justify-between items-center top-0 left-0 fixed">
      <a className="ml-5 my-3 px-5 py-1 cursor-pointer" href="/"><img className="w-20" src={Logo} alt="" /></a>
      <ul className="mr-32">
        <Link className="mr-5 my-3 px-1 py-1 cursor-pointer font-allerta text-textHeader duration-500 hover:text-xl" to="/">PRODUTO</Link>
        <Link className="mr-5 my-3 px-1 py-1 cursor-pointer font-allerta text-textHeader duration-500 hover:text-xl" to="/">CRIADORES</Link>
        <Link className="mr-5 my-3 px-1 py-1 cursor-pointer font-allerta text-textHeader duration-500 hover:text-xl" to="/">PEÇAS</Link>
        <Link className="mr-5 my-3 px-1 py-1 cursor-pointer font-allerta text-textHeader duration-500 hover:text-xl" to="/">REFERÊNCIAS</Link>
      </ul>
    </div>

  )
}

export default Header