import "./Boton.css";

export const Boton = ({letra, audio}) => {
  const sound = new Audio(audio);
  const sonar = () => {
    sound.play();
  };

  return <button onClick={sonar}>{letra}</button>;
};
