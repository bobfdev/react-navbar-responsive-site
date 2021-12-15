import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from './NavbarElements';

function index() {
    return (
        <>
        <Nav>
            <NavLink to='/'>
                {/* <img src={require('../../../public/images/logo.svg')} alt='logo'></img> */}
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/services' activeStyle>
                    Services
                </NavLink>
                <NavLink to='/contact' activeStyle>
                    Contact Us
                </NavLink>
                <NavLink to='/signup' activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>
                    Sign In
                </NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default index