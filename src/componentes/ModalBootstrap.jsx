export default function ModalBootstrap() {
    return (
      <div
        className="modal fade show"
        id="modalBienvenida"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">¡Bienvenido a Cosas de Padres!</h5>
            </div>
            <div className="modal-body">
              <p>
              
                Si eres un padre o madre modelo, amante de la crianza respetuosa y te has venido a juzgar nuestras "tácticas" educativas, lo sentimos... ¡este no es tu lugar! Aquí venimos a compartir nuestras mejores mentiras, manipulaciones y trucos para sobrevivir a la paternidad, con mucho humor y un toque de creatividad.
                
                ¿Alguna vez has dicho "si no comes, los duendecillos se llevarán tu comida"? O tal vez, "si no duermes ahora, las pardelas te llevarán a una isla secreta". Si te suena familiar, ¡estás en el lugar correcto!
                
                Y si no eres padre, pero te encantan las historias divertidas sobre cómo nos las ingenamos para que nuestros hijos hagan lo que queremos, también te invitamos a quedarte. Aquí te reirás con nuestras ocurrencias y cómo sobrevivimos al día a día sin perder el norte (aunque a veces un poco de humor negro nunca viene mal).
                
                Así que, relájate, ponte cómodo y prepárate para disfrutar de las historias más disparatadas de la crianza. ¡Esto es paternidad sin filtros!
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() =>
                  document.getElementById("modalBienvenida").style.display = "none"
                }
              >
                Entrar a la locura
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  