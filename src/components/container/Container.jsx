import React from 'react'

function Container({children}) {
  return <div className='object-cover'>{children}</div>;
  // className='w-full max-w-7xl mx-auto px-4'

}

export default Container