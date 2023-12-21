import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import { UserName } from "../features/user/UserName"

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase border-b border-stone-200 py-3 px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="tracking-widest">Your Pizza Home Co.</Link>

        <SearchOrder/>

        <UserName/>
    </header>
    
  )
}

export default Header