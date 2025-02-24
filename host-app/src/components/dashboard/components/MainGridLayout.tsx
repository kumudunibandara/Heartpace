import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright';

const RemoteUserManager = React.lazy(() => import('remoteApp/UserManager'));
const RemoteBarChart = React.lazy(() => import('remoteCharts/BarChart'));
const UserByCountrySessionChart = React.lazy(() => import('remoteCharts/UserByCountrySessionChart'));
const UserPieChart = React.lazy(() => import('remoteCharts/UserPieChart'));


const MainGridLayout = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            {/* cards */}
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                User Overview
            </Typography>
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}
            >
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    <RemoteBarChart />
                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    {/* < UserByCountrySessionChart /> */}
                    <UserPieChart />
                </Grid>
                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                    < UserByCountrySessionChart />
                </Grid>
            </Grid>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Details
            </Typography>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, lg: 12 }}>
                    <RemoteUserManager />
                </Grid>
            </Grid>
            <Copyright sx={{ my: 4 }} />
        </Box>
    );
}

export default MainGridLayout;
