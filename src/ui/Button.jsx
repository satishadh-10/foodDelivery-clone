import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Button = ({children, disabled, to, type}) => {
  const base= 'bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4'
  const styles= {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs'
  }
  if(to)
return <Link to={to} className={styles[type]}>{children}</Link>
  

  return (
    <button disabled={disabled} className={styles[type]}>
        {children}
    </button>
  )
}

export default Button