import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const styles = {
  contentUtama: {
    width: '70%',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    marginTop: '-100px',
    borderRadius: '20px',
    padding: 5,
  },
};

function FormPencarian() {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={styles.contentUtama}>
        <Grid
          container
          spacing={2}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item xs>
            <Typography variant="caption">Tipe Driver</Typography>
            <TextField
              size="small"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </Grid>
          <Grid item xs>
            <Typography variant="caption">Tanggal Jemput</Typography>
            <TextField
              size="small"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </Grid>
          <Grid item xs>
            <Typography variant="caption">Waktu Jemput/Ambil</Typography>
            <TextField
              size="small"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </Grid>
          <Grid item xs>
            <Typography variant="caption">
              Jumlah Penumpang(optional)
            </Typography>
            <TextField
              size="small"
              id="my-input"
              aria-describedby="my-helper-text"
            />
          </Grid>
          <Grid item xs>
            <Button variant="contained">Cari Mobil</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default FormPencarian;
