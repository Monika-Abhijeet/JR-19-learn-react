function Hero(props) {
  if (props.heroName === "Joker") {
    throw new Error("Not a hero");
  }
  return <h1>{props.heroName}</h1>;
}

export default Hero;
