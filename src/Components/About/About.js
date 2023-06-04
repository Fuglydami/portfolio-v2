import { UilDownloadAlt } from '@iconscout/react-unicons';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';
import AboutInfo from './AboutInfo';

function About({ about }) {
  const { description } = about;

  return (
    <>
      <Helmet>
        <title>Damilare Oyedeji - Software Engineer</title>
        <meta
          name='description'
          content='Have you seen for a self-motivated and enthusiatic Software Engineer who is passionate about writing clean and structured code? No?'
        />
        <link rel='canonical' href='/#about' />
      </Helmet>
      <section className='about section' id='about'>
        <h2 className='section__title'>About me</h2>
        <span className='section__subtitle'>My introduction</span>
        <div className='about__container container grid'>
          <img src='/assets/img/about.png' alt='' className='about__img' />

          <div className='about__data'>
            <p className='about__description'>{description}</p>

            <div className='about__info'>
              <AboutInfo title='3' name='Years of experience' />
              <AboutInfo title='6+' name='Completed projects' />
              <AboutInfo title='4' name='Companies worked' />
            </div>

            <div className='about__buttons'>
              <a
                href='https://drive.google.com/file/d/1OYRNrKz_1_BcqdTE6BxjopoUBaKyWtLb/view?usp=sharing'
                className='button button--flex'
                target='_blank'
                rel='noreferrer'
              >
                Download CV
                <UilDownloadAlt />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
