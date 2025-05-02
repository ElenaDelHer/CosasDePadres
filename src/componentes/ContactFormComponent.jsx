import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "../styles/FormStyles.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("xqaqpqyl");
  if (state.succeeded) {
      return <p>Gracias por querer compartir tu historia con nosotros,en breve la revidaremos y si pasa ciertos filtros será subida a la web.</p>;
  }
  return (
    <form className='form-contact' onSubmit={handleSubmit}>
        <div className='div-contact'>

      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
           <label htmlFor="message">Tu Historia</label>
      <textarea
        id="message"
        name="message"
        placeholder="Escribe tu historia aquí..."
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
        </div>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;