// src/pages/index.js

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Next.js with Material-UI
      </Typography>
    </Container>
  );
}
