import React from 'react'
import ctct from "./Contact.module.css"

function Contact() {
    return (
        <div className={ctct.contact_section}>
            <div className={ctct.contact_section_container}>
                <div className={ctct.contact_container}>
                    <div className={ctct.contact_info}>
                        <h1 className={ctct.ci_h1} >Any time you can call us!</h1>
                        <p className={ctct.ci_p} >Because we know that even the best technology is only as good as the people behind it. 24/7 tech support.</p>
                        <div className={ctct.ci_contact_ctr}>
                            <button className={ctct.ci_contact_ctr_btn}>Contact Us</button>
                            <p className={ctct.ci_contact_ctr_p}><span className={ctct.ci_contact_ctr_p__span}>or</span>+91 9793264343</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
