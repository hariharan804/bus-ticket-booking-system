'use client';
import { Box, Typography, Button, SxProps } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box sx={styles.topSection}>
        <Typography sx={styles.sectionDes}>
          135 inspirational designs, illustrations, and graphic elements from
          the world’s best designers. Want more inspiration? Browse ou
        </Typography>
        <Button variant="contained" color="secondary" disableElevation>
          Book Now
        </Button>
      </Box>
      Home
    </>
  );
}

export const styles: { [key: string]: SxProps } = {
  topSection: {
    padding: '6% 20%',
    minHeight: '43vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3vh',
    backgroundColor: '#1a0a4340',
    backgroundImage: `url(/next.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  sectionDes: {
    color: 'common.white',
    textAlign: 'center',
  },
};
