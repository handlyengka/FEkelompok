import Gen1 from "./Generations/Gen 1";
import Gen2 from "./Generations/Gen 2";
import Gen3 from "./Generations/Gen 3";
import Gen4 from "./Generations/Gen 4";
import Logo from "./Logo";

const Header = () => {
    return(
    <>  
      <Logo/>;
      <Gen1/>;
      <Gen2/>;
      <Gen3/>;
      <Gen4/>;
    </>

    );
};

export default Header;