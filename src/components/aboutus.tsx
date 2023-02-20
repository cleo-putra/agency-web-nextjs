import React, {useRef, useState, useCallback} from 'react';
import Member from './member';

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className='container mx-auto px-11'>
        <p className='leading-tight max-w-5xl mx-auto text-4xl'>
          <strong>We will help you ship better apps, faster,</strong>
          Out team of expert engineers has created th ebest user experiences in some of the most popular apps worldwide.
        </p>
      </div>
      <div className='container mx-auto px-11 text-center mt-28'>
        <h2>Our Team</h2>
        <div className='mt-2'>the &ldquo;spec-ops&rdquo;</div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-colz-4 xl:grid-colz-5 gap-6 lg:gap-20'>
          <Member
            id="1"
            name="Cleo"
            socialId="@bukancleo"
            link="https:///google/com"
          />
          <Member
            id="2"
            name="Sam"
            socialId="@samwhite"
            link="https:///google/com"
          />
          <Member
            id="3"
            name="Oslon"
            socialId="@oslon"
            link="https:///google/com"
          />
          <Member
            id="4"
            name="Yam"
            socialId="@yampro"
            link="https:///google/com"
          />
          <Member
            id="5"
            name="Bella"
            socialId="@bellevue"
            link="https:///google/com"
          />
          <Member
            id="6"
            name="Fred"
            socialId="@Fredinho"
            link="https:///google/com"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs