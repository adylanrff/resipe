import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
// Components
import { AppBar, Toolbar, Typography } from '@material-ui/core'
// Colors
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

type Props = {
  title?: string
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#fff',
    },
  },
  overrides: {
    // Remove card content padding
    MuiCardContent: {
      root: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 0,
       },
      },
    },
  },
});

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Resipe',
}) => (
  <>
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography variant="h5">
              Resipe
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {children}
    </ThemeProvider>
  </>
)

export default Layout
