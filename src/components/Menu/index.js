import { Container, MenuInformations } from "./styles";
import { useState } from "react";
import MenuLateral from "../../components/MenuLateral";

import Imglogo from "../../assets/menu.png";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    {showMenu && (
        <MenuLateral
          handleClose={() => setShowMenu(false)}
        >
        </MenuLateral>
      )}
    <Container>
      <img src={Imglogo} onClick={() => setShowMenu(true)}/>
    </Container>
    </>
  );
}

export default Menu;
