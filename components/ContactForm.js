import React, { useState } from 'react';
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (formData.name && formData.email && formData.subject && formData.description) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'saul.medinax@gmail.com',
            subject: `Nuevo mensaje de ${formData.name}: ${formData.subject}`,
            text: `Nombre: ${formData.name}\nEmail: ${formData.email}\nAsunto: ${formData.subject}\n\nMensaje:\n${formData.description}`
          }),
        });

        if (response.ok) {
          toast.success('¡Mensaje enviado con éxito!');
          setFormData({ name: '', email: '', subject: '', description: '' });
        } else {
          toast.error('Error al enviar el mensaje');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Error al enviar el mensaje');
      }
    } else {
      toast.error('Por favor, completa todos los campos del formulario');
    }
  };

  return (
    <div className="lg:w-3/4 mx-auto bg-black drop-shadow-2xl rounded mb-4">
      <form className='p-6' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lime-600 text-sm font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lime-600 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lime-600 text-sm font-semibold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lime-600 text-sm font-semibold mb-2" htmlFor="description">
          Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            id="description"
            placeholder="Descripción"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
             type="submit"
             className='text-white text-sm border border-purple-500 bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 px-8 w-full'>
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;