import { blue } from "@mui/material/colors";

function Inline() {
  const heading = {
    // "font-size": "72px",
    fontSize: "72px",
    color: "blue",
  };
  return (
    <div>
      <h1 style={heading}>This is an Inline stylesheet</h1>
      <h2 style={{ color: "orange" }}>This is a sub heading</h2>
      <h3 style={heading}>heading3</h3>
      <h3 className="error">Error in my inline stylesheet</h3>
      <h3 className={myStyles.success}>Success here</h3>
    </div>
  );
}

export default Inline;
