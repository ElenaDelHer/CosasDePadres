import { useContext } from "react";
import { HistoryContext } from "../contexto/HistoryContext";

const HistoryComponent = () => {
  // Traigo las historias a través del contexto
  const { filterHistory } = useContext(HistoryContext);

  return (
    <section className="section-history-cards">
      <h1 className="title-section-history">
        Historias de padres
      </h1>

      <div className="history-cards">
        {filterHistory.map((history) => (
          <div className="container-cards" key={history.id}>
            <div className="container-photo">
              {/* Aquí puedes agregar la imagen si lo necesitas */}
              <img src={history.imagen} alt="Historia" />
            </div>
            <div className="card-tema">
              <h3>{history.tematica}</h3>
              <p className="history-history">{history.historia}</p>
              <h5 className="history-autor">{history.autor}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistoryComponent;
