import React from 'react'

function ContactInfo({Icon, title, subtitle}) {
    return (
        <div className="contact__information">
            <Icon className="contact__icon" />
            <div>
                <h3 className="contact__title">{title}</h3>
                <span className="contact__subtitle">{subtitle}</span>
            </div>
        </div>
    )
}

export default ContactInfo
