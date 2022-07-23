import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material'
import { theme } from '../theme';
import { RecoilRoot } from 'recoil';
import Header from '../components/Header';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import '../styles/globals.css'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Header/>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
