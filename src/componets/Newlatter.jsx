// export default function Newlatter() {
//     return (
//         <>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

//                 * {
//                     font-family: 'Poppins', sans-serif;
//                 }
//             `}</style>

//             <section className="flex flex-col items-center justify-center mt-40">
//                 <div className="flex items-center gap-2 text-sm text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
//                     <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
//                             stroke="currentColor" strokeMiterlimit="5.759" strokeLinecap="round" />
//                     </svg>
//                     <span>Simple Process</span>
//                 </div>
//                 <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mt-4">Get started for free today</h1>
//                 <p className="max-w-lg text-center text-slate-500 mt-6">Join thousands of users who are already creating amazing things, completely free to start.</p>
//                 <form className="relative flex items-center rounded-md border border-slate-200 mt-6 text-sm max-w-md w-full">
//                     <svg className="absolute left-3" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M14 6 9.505 8.865a1 1 0 0 1-1.005 0L4 6" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                         <path d="M16.3 1H2.7C1.761 1 1 1.84 1 2.875v11.25C1 15.161 1.761 16 2.7 16h13.6c.939 0 1.7-.84 1.7-1.875V2.875C18 1.839 17.239 1 16.3 1" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                     <input type="email" 
//                         name="email"
//                         placeholder="Enter your email" 
//                         className="focus:outline-none pl-10 py-5 bg-transparent w-full"
//                         required />
//                     <button className="shrink-0 mr-2 px-6 py-3 text-sm bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-md active:scale-95 transition duration-300 text-white">
//                         Subscribe now
//                     </button>
//                 </form>
//             </section>
//         </>
//     );
// };
export default function Newlatter() {
    return (
        <section className="flex flex-col items-center justify-center mt-40">
            <div className="flex flex-col items-center justify-around rounded-2xl m-2 py-20 max-w-5xl w-full bg-white">
                <h2 className="md:text-4xl/14 text-2xl font-bold bg-linear-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Boost your productivity today</h2>
                <p className="mt-4 text-slate-500 max-w-xl text-center">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
                <div className="flex items-center gap-4 mt-6 text-sm">
                    <button type="button" className="bg-indigo-500 hover:bg-indigo-600 transition-all cursor-pointer px-8 py-3 text-white font-medium rounded-full active:scale-95">
                        Get Started
                    </button>
                    <button type="button" className="group flex items-center gap-2 px-8 py-3 cursor-pointer font-medium border border-gray-200 rounded-full text-gray-600 hover:bg-gray-100 transition active:scale-95">
                        Learn More
                        <svg className="mt-1 group-hover:translate-x-1 transition-all" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};