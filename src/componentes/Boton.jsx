import "./Boton.css";

export const Boton = (props) => {
  const sonar = () => {
    var audio = new Audio(props.audio);
    audio.play();
  };

  return <button onClick={sonar}>{props.letra}</button>;
};
