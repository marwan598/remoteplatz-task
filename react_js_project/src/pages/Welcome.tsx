import { useNavigate } from "react-router-dom";
import Button from "../global/components/Button";
import Logo from "../global/components/Logo";
import welcomeImage from "/movieTime.png";

function Welcome() {
  const navigate = useNavigate();

  const onLoginButtonClick = () => {
    navigate("/Login");
  };

  const onRegisterButtonClick = () => {
    navigate("/Register");
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div>
        <Logo />
      </div>
      <div>
        <img src={welcomeImage} alt="image" className="h-96 w-96" />
      </div>
      <div className="flex flex-1 flex-col">
        <Button title="Login" onClick={onLoginButtonClick} />
        <Button title="Register" onClick={onRegisterButtonClick} />
      </div>
    </div>
  );
}

export default Welcome;
