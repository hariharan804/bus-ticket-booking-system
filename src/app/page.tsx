'use client';
import {
  Box,
  Typography,
  Button,
  SxProps,
  Grid,
} from '@mui/material';
import { CSSProperties } from 'react';

export const styles: { [key: string]: SxProps } = {
  topSection: {
    backgroundImage: `url(/bus2.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  topSection2: {
    padding: { xs: '8% 10%', sm: '4% 20%' },
    minHeight: '43vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '3vh',
    backgroundColor: '#30287e75',
  },
  sectionDes: {
    color: 'secondary.100',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '600',
  },
  bookNowBtn: {
    borderRadius: '8px',
    padding: '8px 26px',
    fontWeight: '600',
  },
  section: {
    padding: '40px 7%',
  },
  imgContainer: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    height: '100%',
    flexDirection: 'column',
  },
  sectionImg: {
    borderRadius: '12px 12px 4px 12px',
    height: '200px',
    maxWidth: '-webkit-fill-available',
  },
  sectionImg2: {
    maxWidth: '-webkit-fill-available',
    borderRadius: '12px 12px 12px 4px',
    height: '200px',
    // width: '100%',
  },
  sectionText: {
    color: 'primary.900',
    fontSize: '26px',
    fontWeight: '700',
    marginBottom: '8px',
    fontFamily: 'Nunito Sans',
  },
  sectionSubText: {
    color: 'text.900',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '8px',
  },
};

export default function Home() {
  return (
    <>
      <Box sx={styles.topSection}>
        <Box sx={styles.topSection2}>
          <Typography sx={styles.sectionDes}>
            Bus Ticket Booking for AC Volvo, Sleeper, Luxury and other buses
            with attractive offers. Get confirmed Bus Reservation tickets at
            best prices. Bus is here with a fleet of AC & Non-AC buses from
            renowned operators.
          </Typography>
          <Button
            sx={styles.bookNowBtn}
            variant="contained"
            color="secondary"
            disableElevation
          >
            Book Now
          </Button>
        </Box>
      </Box>
      <Box sx={styles.section}>
        <Grid container height={'100%'} spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.textContainer} alignItems={'start'}>
              <Typography sx={styles.sectionText}>
                1 of 5 Buses qualify
              </Typography>
              <Typography sx={styles.sectionSubText}>
                Primo’s strict safety qualification ensures a safer travel for
                you. Superfast booking process with no service fee + no payment
                gateway charge.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.imgContainer} alignItems={'end'}>
              <img
                style={styles.sectionImg as CSSProperties}
                src="/bus.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ...styles.section, backgroundColor: 'accent.primary' }}>
        <Grid container height={'100%'} spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.imgContainer} alignItems={'start'}>
              <img
                style={styles.sectionImg2 as CSSProperties}
                src="/bus3.jpg"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.textContainer} alignItems={'start'}>
              <Typography sx={styles.sectionText}>Preferred by 90%</Typography>
              <Typography sx={styles.sectionSubText}>
                90% of travellers re-book Primo buses for its punctuality and
                comfort. World's largest online bus ticket booking service
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.section}>
        <Grid container height={'100%'} spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.textContainer} alignItems={'start'}>
              <Typography sx={styles.sectionText}>
                Advantages of online bus booking?
              </Typography>
              <Typography sx={styles.sectionSubText}>
               * Online bus ticket booking keeps you away from the long queues of
                the offline ticket counters.
              </Typography>
              <Typography sx={styles.sectionSubText}>
               * reviews, ratings and bus images available.
              </Typography>
              <Typography sx={styles.sectionSubText}>
               * You can choose the preferred bus type (Volvo Bus, AC or Non AC)
                and also pickup and dropping point and timings.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.imgContainer} alignItems={'end'}>
              <img
                style={styles.sectionImg as CSSProperties}
                src="/bus4.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
