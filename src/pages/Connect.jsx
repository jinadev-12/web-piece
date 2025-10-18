import React from 'react'

function Connect() {
  return (
    
<section id="contact" class="bg-gray-100 py-16 px-4 mt-8 m-auto">
  <div class="max-w-3xl mx-auto text-center mb-12">
    <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
    <p class="text-gray-600">
      Have a project in mind? Let’s work together! Fill out the form below and I’ll get back to you within 24 hours.
    </p>
  </div>

  <div class="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
    <form
      action="https://formspree.io/f/yourFormID"  
      method="POST"
      class="space-y-6"
    >
      <div>
        <label for="name" class="block text-left font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block text-left font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="message" class="block text-left font-medium text-gray-700 mb-1">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

  )
}

export default Connect