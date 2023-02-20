import Image from 'next/image';
import React from 'react';
import { Tile, TileBackground, TileContent, TileWrapper } from './tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work';

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0} renderContent={({progress}) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className='text-4xl md:text-5xl font-semibold'>
                {/* <WorkLink href="https://www.google.com"></WorkLink> */}
                Gulo Panda&apos;s app
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src="/assets/mobile-ui.png" layout='responsive' width={840} height={1420} alt='mobile-proto'/>
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile 
        page={1} renderContent={({progress}) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We built</div>
            <div className='text-4xl md:text-5xl font-semibold'>Single Side Rendering (SSR).</div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image src="/assets/mobile-ui4.webp" layout='responsive' width={840} height={1420} alt='mobile-proto'/>
          </WorkRight>
        </WorkContainer>
        )}
      ></Tile>
      <Tile 
        page={2} renderContent={({progress}) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We helped</div>
            <div className='text-4xl md:text-5xl font-semibold'>Showtime ship faster.</div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image src="/assets/mobile-ui3.webp" layout='responsive' width={840} height={1420} alt='mobile-proto'/>
          </WorkRight>
        </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
)

export default Works;