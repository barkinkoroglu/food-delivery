'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: 'Homepage', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Working Hours', url: '/' },
  { id: 4, title: 'Contact', url: '/' },
];
function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  const user = false;
  return (
    <div className="cursor-pointer">
      {!openMenu ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => {
            setOpenMenu(false);
          }}
        />
      )}
      <div className="bg-red-500 text-white absolute left-0 right-0 top-24 h-[calc(100vh-6rem)] flex flex-col  items-center justify-center text-3xl gap-8 z-10">
        {links.map((item, key) => (
          <Link key={item.id} href={item.url}>
            {' '}
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Menu;
