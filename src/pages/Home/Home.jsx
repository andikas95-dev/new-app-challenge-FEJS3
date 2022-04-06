import { Box } from '@mui/system';
import React from 'react';
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import Navbar from '../../components/NavBar/Navbar';

function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Box sx={{ minHeight: 400, backgroundColor: '#1976D2' }}>
        <Navbar />
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <h1>Home</h1>
        </Box>
      </Box>
      <FormPencarian />
    </div>
  );
}

export default Home;
