import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string
  name: string
  socialId: string
  link: string
}

const Member: React.FC<Props> = ({id, name, socialId, link}) => (
  <div>
    <Image
      src={`/assets/m${id}.png`}
      alt={name}
      width={1366}
      height={1555}
    />
      <div className='text-2xl xl:text-3xl'>{name}</div>
      <div className='text-xl'>
        <a href={link} target="_blank">{socialId}</a>
      </div>
  </div>
)

export default Member