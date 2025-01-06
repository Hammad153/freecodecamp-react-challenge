import React from 'react'

const QuoteBox = ({ req, }) => {

  return (
    <main className='flex items-center justify-center'>
      <div>
        <div className='pt-[20px]'>
        <h2 className='pb-4 font-medium text-2xl text-center px-4'>
          {JSON.stringify(req.quote)}
        </h2>
        </div>  
     </div>
    </main>
    
  )
}

export default QuoteBox