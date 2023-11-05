import Gen1 from "./Generations/Gen 1";
import Gen2 from "./Generations/Gen 2";
import Gen3 from "./Generations/Gen 3";
import Gen4 from "./Generations/Gen 4";
import Logo from "./Logo";

const Header = () => {
    return(
    <>  
      <Logo
      Logo="Ganti Logo"/>;
      <Gen1
      Gen= "Generation 1"/>;
      <Gen2
      Gen= "Generation 2"/>;
      <Gen3
      Gen= "Generation 3"/>;
      <Gen4
      Gen= "Generation 4"/>;
    </>

    );
};

export default Header;