import React from 'react'

const Connect = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-white mt-6">
        <div className='h-55 w-170 bg-zinc-900 opacity-70 rounded-2xl p-5 mt-5 gap-2 flex flex-row'>
            <div id='contact'>
            <div className='ml-2 mt-2 font-bold text-2xl'>Let's Connect</div>
            <div className='ml-2 mt-2'>Have an idea or want to collaborate?</div>
            <div className='ml-2'>Drop a message and I’ll get back to you soon.</div>
            </div>
            <div className='ml-10 mt-6 flex flex-col gap-3'>
            <input className='border p-2 rounded-md' type="text" placeholder="Your e-mail "/>
            <textarea className='border p-2 rounded-md'  placeholder="Your message" rows={4}  cols={30} />
            <button className='border p-2 rounded-md bg-white text-black font-bold'>Send</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Connect
