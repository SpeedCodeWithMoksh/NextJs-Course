/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Head from 'next/head'

const contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(name, phone, email, desc);
    const data = {name, email, phone, desc};

fetch('http://localhost:3000/api/postcontact', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.text())
.then((data) => {
  alert("Thanks for Contacting Us")
  setdesc('')
  setemail('')
  setphone('')
  setname('')
})
.catch((error) => {
  console.error('Error:', error);
});
  }
  
  const handleChange = (e)=>{
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
  }
  return (
    <div>
      <Head>
        <title>Contact | NewsChaser</title>
      </Head>
      <form onSubmit={handleSubmit} className="text-gray-600 body-font relative">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl md:text-4xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Nunber</label>
            <input type="phone" id="phone" name="phone" value={phone} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Enter your Concern</label>
            <textarea id="desc" name="desc" onChange={handleChange} value={desc} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        </div>
      </div>
    </div>
  </div>
</form>
    </div>
  )
}

export default contact