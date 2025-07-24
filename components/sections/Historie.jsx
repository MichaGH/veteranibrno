import React from 'react'

function Historie() {
  return (
    <div className="bg-amber-400 p-4">
    <h2 className="text-6xl text-black font-bold mb-12 mt-6 text-center">Stručná Historie</h2>
    <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div className="flex md:contents flex-row-reverse">
            <div
                className="relative p-4 my-6 w-full bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="timeline-item-title">Založení klubu</h3>
                <p className="timeline-item-desc">Miroslav Bukáček a Jan Klust zakládají klub v Brně, první setkání ve „U tří kohoutů“.</p>
                <span className="timeline-item-date">1994</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full  rounded-t-full bg-gradient-to-b from-red-400 to-red-600">
                    </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-red-500 rounded-full top-1/2"></div>
            </div>
        </div>

        <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-red-600"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-red-600 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 w-full bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="timeline-item-title">Registrace spolku</h3>
                <p className="timeline-item-desc">Oficiální registrace u Ministerstva vnitra ČR jako občanské sdružení.</p>
                <span className="timeline-item-date">2008</span>
            </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
            <div
                className="relative w-full p-4 my-6 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="timeline-item-title">Současnost</h3>
                <p className="timeline-item-desc">Aktivní účast na pietních akcích, spolupráce s Univerzitou obrany, uchovávání odkazu výsadkářů.</p>
                <span className="timeline-item-date">Dnes</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-red-600 to-red-400">
                    </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-red-500 rounded-full top-1/2"></div>
            </div>
        </div>


    </div>
</div>
  )
}

export default Historie