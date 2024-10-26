import './index.css'
import logo from '../../assets/logos/logo.svg';

const Logo = ({height = 50, width = 50}) => {
    return (
        <img src={logo} height={height} width={width} alt="Little Lemon Logo"/>
    )
}

export default Logo;