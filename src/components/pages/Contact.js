import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <li>
        <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="tel:561-403-8472">Phone</a>
      </li>
      <li>
        <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="mailto:Zulma.jeff@yahoo.com">Email</a>
      </li> 
      <li>
        <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="https://www.linkedin.com/in/jeff-zulma-89676920a/">Linkedin</a>
      </li> 
      <li>
        <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 fa fa-github text-gray-700"  href="https://github.com/Cjmoney1234"> Github</a>
      </li> 
    </div>
  );
}
