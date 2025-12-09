import "./style.css";
import { FaBeer } from "react-icons/fa";

const StyledCard = () => {
  return (
    <>
      <div className="styles1">
        <h1>Styles Object 1</h1>
      </div>

      <div className="styles2">
        <h2>Styles Object 2</h2>
      </div>

      <div className="beer">
        <FaBeer />
      </div>
    </>
  );
};

export default StyledCard;
