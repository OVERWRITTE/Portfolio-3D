import React from 'react'

function About() {

/*
        <section className=' w-full h-full flex place-content-center justify-center place-items-center bg-black-500'>
            <img
                className=' mt-20 h-[89vh]'
                src="https://imgv2-2-f.scribdassets.com/img/document/373417775/original/445e0393b0/1628193021?v=1" alt=""
            />
        </section>
*/

    return (
        <section className='pt-20 w-screen h-full bg-black-500'>
            <form action="" className=' h-[100%] gap-2 grid place-content-center justify-center'>
                <span className=' text-white'>Nombre</span>
                <input type="text"  className='w-[60vw] text-white p-1 rounded-xl bg-slate-600 '/>

                <span className=' text-white'>Correo</span>
                <input type="text" className='text-white p-1 rounded-xl bg-slate-600 ' />
                
                <span className=' text-white'>Asunto</span>
                <textarea id="" cols="30" rows="10" className='text-white h-[40vh] p-1 rounded-xl bg-slate-600 '></textarea>
                
                <div className='flex flex-wrap justify-center align-middle'>
                    <button className=' w-[40%] text-white bg-blue-500 rounded-2xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                        Enviar
                    </button>
                    <button className=' w-[40%] text-white bg-slate-700 rounded-2xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                        Borrar
                    </button>
                </div>
                
            </form>
        </section>
    )
}

export default About