import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

const Header = () => {
  return (
    <header>
        <Link to="/">Your Pizza Home Co.</Link>

        <SearchOrder/>

        <p>Sandy</p>
    </header>
    
  )
}

export default Header