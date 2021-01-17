import React from 'react';
import Link from 'next/link';

import { HeaderContainer } from './styles';

import klutch from '../../assets/svg/logo.svg';
import menu from '../../assets/svg/menu.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={menu} alt='Menu' />   
      <Link href='/'>
        <img src={klutch} alt='Klutch' />
      </Link>
      <div></div>
    </HeaderContainer>
  );
}

export default Header;