import { useSelector } from "react-redux";
function About() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>About page: {counter}</h1>
    </div>
  );
}
export default About;
