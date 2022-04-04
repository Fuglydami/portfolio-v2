import React from 'react'
import ServicesContent from './ServicesContent'
import './Services.css'
import {UilArrow, UilDatabase} from "@iconscout/react-unicons"

function Services({services}) {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">What i do</h2>
            <span className="section__subtitle">What i offer/Technologies I use</span>

            <div className="services__container container grid">
                <ServicesContent Icon={UilArrow} title="Frontend Developer" services={services} />
                <ServicesContent Icon={UilDatabase} title="Backend Developer" services={services} />
            </div>
        </section>
    )
}

export default Services
