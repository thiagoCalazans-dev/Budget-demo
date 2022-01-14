import { Link } from 'react-router-dom'


export default function LinkButton ({to, text, variant, color, size }) {
return ( 

        <nav>
        <Link to={to}>
            {text}
        </Link>
        </nav> 
    )    
}