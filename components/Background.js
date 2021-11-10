import React from 'react'

function Background() {
    return (
        <div className='relative h-[700px] bg-no-repeat bg-right bg-cover bg-fixed' style={{backgroundImage:'url(https://wallpapercave.com/wp/wp4652766.jpg)'}}>
             {/* uttility button center */}
             <div className='absolute top-1/2 w-full text-center'>
                <button className='bg-gray-500 text-red-100 font-semibold rounded-lg p-2 border border-yellow-500 hover:bg-red-300 active:scale-90 transiton duration-150'>UTILITY BUTTON</button>  
            </div>
        </div>
    )
}

export default Background
