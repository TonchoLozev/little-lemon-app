import Logo from '../../atoms/Logo';
import Nav from '../Nav';

import './index.css';

const Header = () => {
    return (
        <>
            <Logo width={150}/>
            <Nav/>
        </>
    )
}

export default Header;