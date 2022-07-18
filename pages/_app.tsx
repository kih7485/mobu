import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material'
import { theme } from '../theme'
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from 'recoil';
import '../styles/globals.css'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
