import React, { useState } from 'react';
import Link from 'next/link';

import { Drawer } from '@material-ui/core';

import { HeaderContainer, DrawerContainer } from './styles';

import klutch from '../../assets/svg/logo.svg';
import menu from '../../assets/svg/menu.svg';
import { useRouter } from 'next/router';

const menuItems = [
  {
    path: '/',
    title: 'Empréstimos',
  },
  {
    path: '/add',
    title: 'Solicitar Empréstimo',
  },
  {
    path: '/registration',
    title: 'Cadastrar Cliente',
  }
];

const Header: React.FC = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const offDialog = () => {
    setOpen(false);
  }
  const onDialog = () => {
    setOpen(true);
  }

  return (
    <HeaderContainer>
      <img src={menu} alt='Menu' onClick={onDialog} />
      <Link href='/'>
        <img src={klutch} alt='Klutch' />
      </Link>
      <div></div>
      <Drawer open={open} onClose={offDialog}>
        <DrawerContainer>
          {
            menuItems.map(item => (
              (item.path === router.pathname)
                ?
                <Link key={item.path} href={item.path}>
                  <div style={{ background: '#EF9C4B' }}>
                    {item.title}
                  </div>
                </Link>
                :
                <Link key={item.path}  href={item.path}>
                  <div style={{ color: '#EF9C4B' }} >
                    {item.title}
                  </div>
                </Link>
            ))
          } 
        </DrawerContainer>
      </Drawer>
    </HeaderContainer>
  );
}

export default Header;