import spinner from '../images/spinner.gif';
import logo from '../images/spinner.gif';

const Spinner=()=>{

    return(
        <img 
        alt='loading...'
        style={{
            width:'200px',
            display:'block',
            margin:'auto'
        }} 
        src={logo}
        />
    )
}

export default Spinner