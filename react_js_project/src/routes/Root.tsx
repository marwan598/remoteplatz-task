import Welcome from "../pages/Welcome";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (token) {
      navigate("/Home", { replace: true });
    }
  }, [navigate]);

  return <Welcome />;
}

export default Root;
