import "./Botonera.css";
import { Boton } from "./Boton";
const Notas = [
  { nota: "E", audio: "../assets/sonidosguitarra/uno.mp3" },
  { nota: "A", audio: "../assets/sonidosguitarra/dos.mp3" },
  { nota: "D", audio: "../assets/sonidosguitarra/tres.mp3" },
  { nota: "G", audio: "../assets/sonidosguitarra/cuatro.mp3" },
  { nota: "B", audio: "../assets/sonidosguitarra/cinco.mp3" },
  { nota: "E8", audio: "../assets/sonidosguitarra/seis.mp3" },
];
const listItems = Notas.map((nota) => (
  <Boton key={nota.audio} letra={nota.nota} audio={nota.audio} />
));
export const Botonera = () => {
  return <main className="Botonera">{listItems}</main>;
};
