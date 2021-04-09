import React from 'react'
import Meta from '../components/Meta'
import { myWorks } from '../data/work'


const works = () => {
  return (
    <main>
      <Meta title='My Works' />
      <h1 className='lg-heading'>
        My <span className='text-secondary'>works</span>
      </h1>
      <h2 className='sm-heading'>Check Out Some Of My Projects...</h2> 
      {/* list of projects */}
      <div className='projects'>
        {myWorks.map((work) => (
          <div className='item' key={work.id}>
            <a href=''>
              <img
                src={work.imge}
                alt={work.title}
             
              />
            </a>
            <a href='#' className='btn-light'>
              <i className='fas fa-eye'></i> {work.title}
            </a>
            <a href={work.githubUrl} className='btn-light'>
              <i className='fas fa-eye'></i> show In gitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}

export default works

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/jobs/work')
//   const myWorks = await res.json()

//   return {
//     props: { myWorks },
//   }
// }
