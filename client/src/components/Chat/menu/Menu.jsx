import { Box } from '@mui/system';
import { useState } from 'react';
import React from 'react';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';
function Menu() {
  const [text,setText]=useState('');
  return (
    <Box>
        <Header />
        <Search setText={setText}/>
        <Conversations text={text}/>
    </Box>
  )
}

export default Menu;