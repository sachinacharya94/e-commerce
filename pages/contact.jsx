import React from 'react'

const Contact = () => {
  return (
    <div className='w-[80%] mx-auto bg-slate-200'>

<h2 className='text-center text-4xl mt-3 mb-3'>Contact us</h2>
   
   <form className="mb-6">
      <div className="mb-6">
         <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Your email</label>
         <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="info@evolvestore.com" required />
      </div>
      <div className="mb-6">
         <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Subject</label>
         <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
      </div>
      <div className="mb-6">
         <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">Your message</label>
         <textarea id="message" rows="4" className="block p-2.5 w-[50%] mx-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 w-[20%] mx-auto focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
   </form>
   <div className='text-center m-3'>
   <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <a href="#" className="hover:underline">info@evolvestore.com</a>
   </p>
   <p className="text-sm text-gray-500 dark:text-gray-400">
      <a href="#" className="hover:underline">212-456-7890</a>
   </p>
   </div>
</div>
    
  )
}

export default Contact