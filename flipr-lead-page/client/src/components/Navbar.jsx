import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", borderBottom: "1px solid #ddd" }}>
      <img src="/assets/images/logo.png" alt="logo" width="120" style={{ cursor: "pointer" }} onClick={() => navigate("/")} />
      {location.pathname === "/" && (
        <button 
          onClick={() => navigate("/admin")} 
          style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }}
        >
          Admin Panel
        </button>
      )}
    </nav>
  );
};

export default Navbar;
