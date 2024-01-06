import "./Botonera.css";
import { Boton } from "./Boton";
const notas = [
  { letra: "e8", audio: "/uno.mp3" },
  { letra: "b", audio: "/dos.mp3" },
  { letra: "g", audio: "/tres.mp3" },
  { letra: "d", audio: "/cuatro.mp3" },
  { letra: "a", audio: "/cinco.mp3" },
  { letra: "e", audio: "/seis.mp3" }
];
const listItems = notas.map(nota => (
  <Boton key={nota.letra} {...nota} />
));
export const Botonera = () => {
  return <main className="Botonera">{listItems}</main>;
};
