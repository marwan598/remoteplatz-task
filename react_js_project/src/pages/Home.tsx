import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return <div>Home</div>;
}

export default Home;
