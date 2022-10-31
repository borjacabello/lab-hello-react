function Header(props) {

    const {logoImage, menuImage} = props;

    return (
        <header style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", padding: "0 30px"}}>
            <img src={logoImage} alt="logo" style={{width: "70px", height: "70px"}}/>
            <img src={menuImage} alt="menu" style={{width: "70px", height: "70px"}}/>
        </header>
    )
}

export default Header;