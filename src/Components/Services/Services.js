import { UilArrow, UilDatabase } from '@iconscout/react-unicons';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Services.css';
import ServicesContent from './ServicesContent';

function Services({ services }) {
  return (
    <>
      <Helmet>
        <title>Damilare Oyedeji - Software Engineer</title>
        <meta
          name='description'
          content='Very vast in these technologies; JavaScript, TypeScript, ReactJs, React Native, BitBucket, Jira, Azure, Git/Github, Styled-Component, Tailwind CSS, Node, MongoDB...'
        />
        <link rel='canonical' href='/#services' />
      </Helmet>
      <section className='services section' id='services'>
        <h2 className='section__title'>What i do</h2>
        <span className='section__subtitle'>
          What i offer/Technologies I use
        </span>

        <div className='services__container container grid'>
          <ServicesContent
            Icon={UilArrow}
            title='Frontend Development'
            services={services}
          />
          <ServicesContent
            Icon={UilDatabase}
            title='Backend Development'
            services={services}
          />
        </div>
      </section>
    </>
  );
}

export default Services;
