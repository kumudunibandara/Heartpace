import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from './components/Header';
import MainGridLayout from './components/MainGridLayout';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
    const currentTheme = useSelector((state: RootState) => state.layout.theme) || 'light';
    const innerDarkTheme = React.useMemo(
        () => createTheme({ palette: { mode: 'dark' } }),
        []
    );

    const innerLightTheme = React.useMemo(
        () => createTheme({ palette: { mode: 'light' } }),
        []
    );
    const currentSelectedTheme = currentTheme === 'dark' ? innerDarkTheme : innerLightTheme;
    return (
        <>
            <ThemeProvider theme={currentSelectedTheme}>
                <div>{props.disableCustomTheme}</div>
                <CssBaseline enableColorScheme />
                <Box sx={{ display: 'flex' }}>
                    <Box
                        component="main"
                        sx={(theme) => ({
                            flexGrow: 1,
                            backgroundColor: theme?.palette.background.default,
                            overflow: 'auto',
                        })}
                    >
                        <Stack
                            spacing={2}
                            sx={{
                                alignItems: 'center',
                                mx: 3,
                                pb: 5,
                                mt: { xs: 8, md: 0 },
                            }}
                        >
                            <Header />
                            <MainGridLayout />
                        </Stack>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
}
