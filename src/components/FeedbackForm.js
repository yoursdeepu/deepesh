import React from 'react';
import { useState } from 'react';

const FeedbackForm = () => {
    const [form ,setForm]=useState({firstName:'',lastName:'',address:'',country:'',email:'',number:''});

     const handleChange=(e)=>{
        setForm({[e.target.firstName]:e.target.value})
     };
     console.log(form)

     const handleSubmit=(e)=>{
                e.preventDefault();
                setForm({firstName:'',lastName:'',address:'',country:'',email:'',number:''})
     }
     const [toggle, setToggle] = useState(false);
  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    
    <div className='w-[500px] flex items-center flex-col-reverse justify-center p-5 bg-slate-300'>
           {toggle && (
   

      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label>First Name :</label>
        <input type="text" name='firstName' value={form.firstName} onChange={handleChange} required />
        <label>Last Name :</label>
        <input type="text" name='firstName' value={form.LastName} onChange={handleChange} required />
        <label>Address :</label>
        <input type="textarea" name='firstName' value={form.address} onChange={handleChange} required />
        <label>Country :</label>
        <input type="text" name='firstName' value={form.country} onChange={handleChange} required />
        <label>E-mail :</label>
        <input type="email" name='firstName' value={form.email} onChange={handleChange} required />
        <label>Phone Number :</label>
        <input type="text" name='firstName' value={form.number} onChange={handleChange} required />
        <button type='submit' className=' border bg-slate-400 p-2'> Submit</button>
      </form>
      )}
      <div className="shadow-xl border p-2 mt-20 font-mono rounded-md w-[230px] text-lg text-center bg-slate-400">
        FeedBack
        <input
          className="cursor-pointer border-2 rounded bg-slate-400 border flex m-auto mt-3 p-2 hover:bg-white"
          type="button"
          value="Button"
          onClick={handleToggleChange}
        />
      </div>
    </div>
  )
}

export default FeedbackForm
