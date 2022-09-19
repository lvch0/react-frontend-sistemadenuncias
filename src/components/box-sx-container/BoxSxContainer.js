import * as React from 'react';
import Box from '@mui/material/Box';
import { palette } from '@mui/system';

export default function BoxSxContainer() {
  return (
    <Box
      sx={{
        width: 500,
        height: 300,
        bgcolor: 'text.primary'
        // // backgroundColor: 'text.primary',
        // // '&:hover': {
        // //   backgroundColor: 'text.primary',
        // },
      }}
    />
  );
}
