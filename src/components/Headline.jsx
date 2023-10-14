import React from 'react';
import luigiImage from '../assets/luigi-image.jfif'

const Headline = () => {
  return (
    <section className='py-10 px-11 md:flex md:justify-center md:items-center md:py-20'>
      <div className='md:w-2/5'>
        <h1 className='text-shadow font-bold text-3xl text-dark-spring-green'><span className='text-midnight-green'>Full-stack</span> Web Developer</h1>
        <br />
        <p className='text-lg text-gray-500'>
          Hello! I'm <span className='text-midnight-green'>Luis Carlos Valera</span>, a passionate Full Stack Web Developer 
          focused on continuous learning. I have experience in front-end and back-end 
          development, using technologies such as JavaScript, React and Ruby on 
          Rails. I'm excited to connect with you. Plus, I'm a proud fan of <span className='text-midnight-green'>Real Madrid!</span>
        </p>
        <br />
        <h2 className='text-lg font-semibold text-dark-spring-green text-shadow'>Let's talk and explore new possibilities in the world of web development!</h2>
      </div>

      <div className='photo-bg-headline flex justify-center'>
        <img src={luigiImage} className='photo-headline'></img>
      </div>
    </section>
  )
}

export default Headline
