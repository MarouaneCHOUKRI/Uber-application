import Launch_Client_1 from "./components/Client/Connexion/Launch"
import Launch_Client_2 from "./components/Client/Commande/Launch"
import Launch_Client_3 from "./components/Client/MaCourse/launch"
import Launch_Client_4 from "./components/Client/Planifier/launch"
import Launch_Client_5 from "./components/Client/Compte/launch"

import Launch_Chauffeur from "./components/Chauffeur/launch_chauffeur"


const headerHide = { headerShown : false };

const Navigation = () => {

  return (
    Launch_Client_2()
  );

}

export default Navigation;
