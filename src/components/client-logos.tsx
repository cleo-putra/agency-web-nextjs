import React from 'react'
import Image from 'next/image'
import SliderContainer, { SliderItem } from './slider'

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className='' contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>  
        <Image 
          src="/assets/intrax-logo.svg" 
          width={150}
          height={50}
          alt="Intrax"
          objectFit='contain'
          />
      </SliderItem>
      <SliderItem width={150}>
        <Image 
          src="/assets/logo-com1.svg" 
          width={150}
          height={50}
          alt="Intrax"
          objectFit='contain'
          />
      </SliderItem>
      <SliderItem width={150}>
        <Image 
          src="/assets/xbox.svg" 
          width={150}
          height={50}
          alt="Intrax"
          objectFit='contain'
          />
      </SliderItem>
      
      <SliderItem width={150}>
        <Image 
          src="/assets/soundcloud.svg" 
          width={150}
          height={50}
          alt="Intrax"
          objectFit='contain'
          />
      </SliderItem>
      
      <SliderItem width={150}>
        <Image 
          src="/assets/spotify.svg" 
          width={150}
          height={50}
          alt="Intrax"
          objectFit='contain'
          />
      </SliderItem>
      
      <SliderItem width={150}>
        <Image 
          src="/assets/heineken.svg" 
          width={150}
          height={50}
          alt="Intrax"
          objectFit='contain'
          />
      </SliderItem>
      
      <SliderItem width={150}>
        <Image 
          src="/assets/slack.svg" 
          width={150}
          height={50}
          alt="Intrax"
          objectFit='contain'
          />
      </SliderItem>
      <SliderItem width={150}>
        <Image 
          src="/assets/tinder.svg" 
          width={150}
          height={50}
          alt="Intrax"
          objectFit='contain'
          />
      </SliderItem>
    </SliderContainer>
  </>
)

export default ClientLogos
