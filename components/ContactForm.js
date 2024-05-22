import React from 'react';

const ContactForm = () => {
  return (
    <div className="lg:w-3/4 mx-auto bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-lime-900">
      <div className="mb-4">
        <label className="block text-lime-600 text-sm font-bold mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lime-600 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lime-600 text-sm font-bold mb-2" htmlFor="subject">
          Subject
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          type="text"
          placeholder="Subject"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lime-600 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="description"
          placeholder="Description"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
           className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-2 px-8'>
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
