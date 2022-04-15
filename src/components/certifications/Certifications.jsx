import React from 'react'

import './certifications.scss'

import CKAD from '../../assets/CKAD.PNG'
import CKA from '../../assets/CKA.PNG'
import SA from '../../assets/Solution Architect.PNG'
import AD from '../../assets/Azure Developer.PNG'

// import CKA from '../../assets/cka-certified-kubernetes-administrator.png'
// import CKAD from '../../assets/ckad-certified-kubernetes-application-developer.png'
// import SA from '../../assets/microsoft-certified-azure-solutions-architect-expert.png'
// import AD from '../../assets/microsoft-certified-azure-developer-associate.png'

const Certifications = () => {
  return (
    <section id="certifications">
        <h5>My credible</h5>
        <h2>Certifications</h2>
      <div className="container certifications__container">
        <article className='certificate__item'>
          <div className='certificate__item__image'>
            <img src={CKAD}></img>
          </div>
          <div className='certificate__item__cta'>
            <a href='https://www.credly.com/badges/0c45ffc0-a7d7-4bec-a746-0029f4724eab/public_url' className='btn btn-primary' target="_blank">Verify</a>
          </div>
        </article>

        <article className='certificate__item'>
          <div className='certificate__item__image'>
            <img src={CKA}></img>
          </div>
          <div className='certificate__item__cta'>
            <a href='https://www.credly.com/badges/605ec939-3be9-408e-92ab-c802101cdda8/public_url' className='btn btn-primary' target="_blank">Verify</a>
          </div>
        </article>

        <article className='certificate__item'>
          <div className='certificate__item__image'>
            <img src={SA}></img>
          </div>
          <div className='certificate__item__cta'>
            <a href='https://www.credly.com/badges/d3b11dc4-8e9f-4fbb-92bb-b07081ecee52/public_url' className='btn btn-primary' target="_blank">Verify</a>
          </div>
        </article>

        <article className='certificate__item'>
          <div className='certificate__item__image'>
            <img src={AD}></img>
          </div>
          <div className='certificate__item__cta'>
            <a href='https://www.credly.com/badges/1ba68357-51d1-4f3c-a43b-2c2f1ae8b2fd/public_url' className='btn btn-primary' target="_blank">Verify</a>
          </div>
        </article>
       
      </div>
    </section>
  )
}

export default Certifications