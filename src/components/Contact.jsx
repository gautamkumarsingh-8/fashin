import React from 'react'

const Contact = () => {
  return (

    <div className='  md:ml-24 ml-10 max-w-[900px] md:max-w-[1240px] mt-32 mx-auto md:h-[450px] md:grid grid-cols-2'>
      <div className=''>
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"> Fashion Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
              </div>
              <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0000FF] sm:w-fit hover:bg-[#007FFF] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
          </div>
        </section>
      </div>

      <div className=' flex justify-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <div className='flex items-center md:w-[600px] w-[420px] rounded '>
        <iframe className='md:w-[600px]  md:h-[80vh] h-[50vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.4961993413604!2d85.12094627409742!3d25.621652114380357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed595f47932bdf%3A0x3384a53b0da6b987!2sFashion%20City%20-%20Boring%20Canal%20Road!5e0!3m2!1sen!2sin!4v1725094360206!5m2!1sen!2sin" ></iframe>
        </div>
      </div>

    </div>
  )
}

export default Contact