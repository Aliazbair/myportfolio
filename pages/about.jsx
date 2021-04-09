import React from 'react'
import Meta from '../components/Meta'
import Skills from '../components/Skills'
import { Jobs } from '../data/job'

const About = () => {
  const aboutMe = 'let me tell you a few things...'

  return (
    <main>
      <Meta title='Abou Me' />
      <h1 className='lg-heading'>
        About <span className='text-secondary'>Me🥰</span>
      </h1>
      <h2 className='sm-heading'>{aboutMe}</h2>
      <div className='about-info'>
        <img
          src={'img/portrait.jpg'}
          className='bio-image'
          alt='ali alzubair'
        />
        {/* bio */}
        <div className='bio'>
          <h3 class='text-secondary'>BIO</h3>
          <p>
            Hello , I am Freelance Fronten & Backend Developer , I am passionate
            creating and developer web interfaces. With years of Experince in
            web design and development
          </p>
        </div>

        {/* mt works */}
        {Jobs.map((job) => (
          <div className='job job1' key={job.id}>
            <h3>{job.title}</h3>
            <h6>{job.type}</h6>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
        <Skills />
    </main>
  )
}

export default About
// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/jobs')
//   const Jobs = await res.json()
//   return {
//     props: { Jobs },
//   }
// }
