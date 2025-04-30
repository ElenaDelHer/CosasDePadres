import imagen1 from "./src/Img/imagen1.jpg";
import imagen2 from "./src/Img/imagen2.jpg";
import imagen3 from "./src/Img/imagen3.jpg";
import imagen4 from "./src/Img/imagen4.jpg";
import imagen5 from "./src/Img/imagen5.jpg";
import imagen6 from "./src/Img/imagen6.jpg";
import imagen7 from "./src/Img/imagen7.jpg";
import imagen8 from "./src/Img/imagen8.jpg";
import imagen9 from "./src/Img/imagen9.jpg";
import imagen10 from "./src/Img/imagen10.jpg";
import imagen11 from "./src/Img/imagen11.jpg";

const historiasPadres = [
  {
    id: 1,
    tematica: "Mentiras para obedecer",
    historia: "Cuando llega la hora de irse del parque, les digo que si no se van, el parque cierra y se va a quedar vacío. A veces funciona, otras veces no tanto...",
    autor: "Anónima en apuros logísticos",
    imagen: imagen1
  },
  {
    id: 2,
    tematica: "Mentiras alimenticias",
    historia: "Mi nieta, fan absoluta del salmón, nunca quería comerlo, hasta que un día le dije que las estrellas de mar se alimentaban de eso, ¡y empezó a comer como loca!",
    autor: "Abuela master chef con truco",
    imagen: imagen2
  },
  {
    id: 3,
    tematica: "Mentiras de higiene y salud",
    historia: "Le digo a mi hija que si no se lava bien las manos, las bacterias se multiplican y nos atacarán por la noche. Ya no protesta tanto.",
    autor: "Mamá de la OMS (Organización de Madres Sabias)",
    imagen: imagen3
  },
  {
    id: 4,
    tematica: "Mentiras alimenticias",
    historia: "En el comedor, cuando tocaba pescado rebozado, les decía que era pollo disfrazado. De alguna forma, funcionaba...",
    autor: "Señora del comedor y reina del disimulo",
    imagen: imagen4
  },
  {
    id: 5,
    tematica: "Mentiras alimenticias",
    historia: "Solo quedaba yogur de limón en la nevera, así que le dije a mi hijo que era un yogur de fresa ‘especial’. Se lo comió sin quejarse.",
    autor: "Mamá publicista accidental",
    imagen: imagen5
  },
  {
    id: 6,
    tematica: "Mentiras legales",
    historia: "Cuando hace frío y mi hijo quiere ponerse pantalón corto, le digo que si sale con eso, puede que no vuelva a ver el sol hasta el verano. A veces funciona.",
    autor: "Jurista del clima doméstico",
    imagen: imagen6
  },
  {
    id: 7,
    tematica: "Mentiras mágicas y fantásticas",
    historia: "A mi hijo no le gustan las verduras, así que le dije que las espinacas le daban fuerza para levantar cosas pesadas, ¡y no se las pensó dos veces!",
    autor: "Madre nutricionista de Hogwarts",
    imagen: imagen7
  },
  {
    id: 8,
    tematica: "Mentiras mágicas y fantásticas",
    historia: "Le dije a mi hija que las zanahorias ayudan a ver en la oscuridad, y desde entonces no puede comerlas lo suficientemente rápido.",
    autor: "Mamá con visión creativa",
    imagen: imagen8
  },
  {
    id: 9,
    tematica: "Mentiras legales",
    historia: "Cada vez que mi hijo dice palabrotas, le explico que el vocabulario de los adultos está reservado solo para las reuniones importantes, y no para los niños.",
    autor: "Padre con Código Penal Infantil",
    imagen: imagen9
  },
  {
    id: 10,
    tematica: "Mentiras de higiene y salud",
    historia: "No quería ducharse, así que le dije que si no se bañaba, el agua se iría y se quedaría sin baño hasta la próxima luna llena.",
    autor: "Madre antibichos fiesteros",
    imagen: imagen10
  },
  {
    id: 11,
    tematica: "Mentiras alimenticias",
    historia: "No quería comer tortilla, así que le dije que la tortilla era como un escudo protector contra los monstruos invisibles. Se la comió sin rechistar.",
    autor: "Papá versión Kinder Sorpresa",
    imagen: imagen11
  },
  {
    id: 12,
    tematica: "Mentiras mágicas y fantásticas",
    historia: "Cuando se resiste a irse del parque, le cuento que el parque cierra a medianoche y que solo los niños madrugadores pueden quedarse hasta el final. A veces se lo cree.",
    autor: "Madre domadora de parques",
    imagen: imagen1
  },
  {
    id: 13,
    tematica: "Mentiras legales",
    historia: "Cuando me pide chuches en lunes, le digo que solo se venden en días impar. ¡Y a veces me cree!",
    autor: "Mamá experta en leyes imaginarias",
    imagen: imagen2
  },
  {
    id: 14,
    tematica: "Mentiras mágicas y fantásticas",
    historia: "Odia la cebolla, así que le dije que las cebollas eran en realidad hadas diminutas que se camuflaban. Desde entonces no las ha tocado.",
    autor: "Padre con gran imaginación culinaria",
    imagen: imagen3
  },
  {
    id: 15,
    tematica: "Mentiras de higiene y salud",
    historia: "Mi hijo no quería cortarse las uñas, así que le dije que las uñas largas atraían rayos y tormentas. Ahora, se las corta por si acaso.",
    autor: "Padre podólogo mental",
    imagen: imagen4
  },
  {
    id: 16,
    tematica: "Mentiras para obedecer",
    historia: "Cuando se hace de noche en el parque, le digo que el parque se convierte en un castillo encantado y que solo los niños obedientes pueden irse a casa. Lo suficientemente convincente.",
    autor: "Mamá cronista de columpios",
    imagen: imagen5
  },
  {
    id: 17,
    tematica: "Mentiras mágicas y fantásticas",
    historia: "Le dije que si no dormía con la boca cerrada, su alma se escaparía a la dimensión de los ronquidos. Desde entonces duerme tranquila.",
    autor: "Madre con doctorado en zoología onírica",
    imagen: imagen6
  },
  {
    id: 18,
    tematica: "Mentiras mágicas y fantásticas",
    historia: "Mi hija no quería recoger los peluches, así que le dije que si no lo hacía, los peluches se irían de vacaciones. Nunca más dejó uno fuera de su caja.",
    autor: "Padre asesor en protocolo peluchil",
    imagen: imagen7
  },
  {
    id: 19,
    tematica: "Mentiras educativas",
    historia: "Cuando no quiere apagar la tablet, le digo que si la deja, los unicornios aparecerán para llevársela. Se la apaga al instante.",
    autor: "Mamá infiltrada en la CIA",
    imagen: imagen8
  },
  {
    id: 20,
    tematica: "Mentiras mágicas y fantásticas",
    historia: "No quería tomar la medicina, así que le dije que era un polvo mágico que la haría volar. No sólo la tomó, sino que pidió más.",
    autor: "Padre domador de criaturas mitológicas",
    imagen: imagen9
  },
  {
    id: 21,
    tematica: "Mentiras de salud y ciencia",
    historia: "Para que no beba Coca-Cola, le digo que si lo hace, el gas hará que sus huesos exploten. Es bastante eficaz, la verdad.",
    autor: "Madre licenciada en ciencias del miedo",
    imagen: imagen10
  },
  {
    id: 22,
    tematica: "Mentiras educativas",
    historia: "Tira los papeles al suelo y le digo que si sigue, los gnomos de la limpieza van a llevarse todo su material. Se asusta y recoge todo.",
    autor: "Padre defensor del sombrero animal",
    imagen: imagen11
  },
  {
    id: 23,
    tematica: "Mentiras educativas",
    historia: "Le dije que si salía sin abrigo, su cuerpo se convertiría en un cubo de hielo. Desde entonces no olvida su abrigo.",
    autor: "Mamá meteoróloga mental",
    imagen: imagen1
  },
  {
    id: 24,
    tematica: "Mentiras educativas",
    historia: "Para que se concentrara haciendo los deberes, le dije que si no lo hacía, el sol se apagaría. Es un poco drástico, pero funcionó.",
    autor: "Padre coach de escritura mística",
    imagen: imagen2
  },
  {
    id: 25,
    tematica: "Mentiras educativas",
    historia: "No quería usar calcetines, así que le dije que si no los usaba, los dragones le robarían los pies. Ahora se los pone sin quejarse.",
    autor: "Madre comentarista de la Liga Ácaro",
    imagen: imagen3
  },
  {
    id: 26,
    tematica: "Mentiras educativas",
    historia: "No quería ir al colegio, así que le dije que si no iba, se perdería la visita de los superhéroes. Se puso el uniforme al instante.",
    autor: "Padre físico cuántico alternativo",
    imagen: imagen4
  },
  {
    id: 27,
    tematica: "Mentiras mágicas y fantásticas",
    historia: "En mi casa, por las noches, se escuchaban las pardelas cantando. Le dije que si no se dormía, ellas la llevarían a su isla secreta.",
    autor: "Chica con miedo nocturno y padres imaginativos",
    imagen: imagen5
  }
];

export const GetAllHistory = () => {
 
  
  return historiasPadres;
};

