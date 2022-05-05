import { useSelector } from "react-redux";
function About() {
  const isLogged = useSelector((state) => state.isLogged);
  if (!isLogged) {
    return <h1>Please Login to view this page</h1>;
  }
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}
export default About;
