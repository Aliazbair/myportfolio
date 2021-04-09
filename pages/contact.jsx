import React from 'react'
import Meta from '../components/Meta'

const contact = () => {
  return (
    <main id='contact'>
      <Meta title='Contact me' />
      <h1 className='lg-heading'>
        Contact
        <span className='text-secondary'>Me</span>
      </h1>
      <h2 className='sm-heading'>This is how you can reach me...</h2>
      <div className='boxes'>
        <div>
          <span className='text-secondary'>Email: </span> ali0995559052@gmail.com
        </div>
        <div>
          <span className='text-secondary'>Phone: </span> 249995559052
        </div>
        <div>
          <span className='text-secondary'>Address: </span> sudan
        </div>
      </div>
    </main>
  )
}

export default contact
