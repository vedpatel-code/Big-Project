import React from 'react'

const Card = () => {
  return (
    <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto mt-30">Latest Project</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                This all project is i am a created 
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="/resume.png" alt="" />
                    <h3 className="text-base text-slate-900 font-medium mt-3">Resume Builder</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">React JS, MongoDB</p>
                </div>
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="/ai.png" alt="" />
                    <h3 className="text-base text-slate-900 font-medium mt-3">AI Saas</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">React JS, Clerk</p>
                </div>
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="/web.png" alt="" />
                    <h3 className="text-base text-slate-900 font-medium mt-3">AI Website Builder</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">React JS, PERN Stack</p>
                </div>
            </div>
        </>
  )
}

export default Card
