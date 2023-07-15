import { Metadata } from 'next';
"use client";
import './globals.css';
import { MuiThemeProvider } from '@/helpers/theme';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// import { Box } from '@mui/material';
import '@fontsource/nunito-sans';
import '@fontsource/lato';
import { Toaster } from 'react-hot-toast';

// export const metadata: Metadata = {
//   title: `Bus Ticket Booking System`,
//   description: `Bus Ticket Booking System`,
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          {/* <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{ minHeight: '100vh' }}
            >
            <Header />
            <Box flexGrow={1}>{children}</Box>
            <Footer />
          </Box> */}
          {children}
          <Toaster />
        </MuiThemeProvider>
      </body>
    </html>
  );
}
