import Inline from "./inline";
import ExternalStyles from "./stylesheet";
import "./styles.css";
import myStyles from "./styles.module.css";

function ParentStyling() {
  return (
    <div>
      <h1 className="error">Error</h1>
      <h1 className={myStyles.success}>Success</h1>
      <Inline />
      <ExternalStyles />
    </div>
  );
}
export default ParentStyling;
