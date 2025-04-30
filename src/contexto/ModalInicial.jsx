import { useState, createContext } from "react";

// Se crea el contexto para el modal
export const ModalContext = createContext();

// Proveedor del contexto
export function ModalInicial({ children }) {
    // Estado para controlar la visibilidad del modal
    const [showModal, setShowModal] = useState(true);

    // Función para cerrar el modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <ModalContext.Provider value={{ showModal, closeModal }}>
            {children}

            {/* Mostrar el modal si showModal es true */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>¡Bienvenido a la Guía Definitiva de Padres NO Modelos!</h2>
                        <p>Si eres un padre o madre modelo, amante de la crianza respetuosa y te has venido a juzgar nuestras "tácticas" educativas, lo sentimos... ¡este no es tu lugar! Aquí venimos a compartir nuestras mejores mentiras, manipulaciones y trucos para sobrevivir a la paternidad, con mucho humor y un toque de creatividad.

¿Alguna vez has dicho "si no comes, los duendecillos se llevarán tu comida"? O tal vez, "si no duermes ahora, las pardelas te llevarán a una isla secreta". Si te suena familiar, ¡estás en el lugar correcto!

Y si no eres padre, pero te encantan las historias divertidas sobre cómo nos las ingenamos para que nuestros hijos hagan lo que queremos, también te invitamos a quedarte. Aquí te reirás con nuestras ocurrencias y cómo sobrevivimos al día a día sin perder el norte (aunque a veces un poco de humor negro nunca viene mal).

Así que, relájate, ponte cómodo y prepárate para disfrutar de las historias más disparatadas de la crianza. ¡Esto es paternidad sin filtros!</p>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
}
