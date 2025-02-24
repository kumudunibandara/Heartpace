import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getUsersInfo, User } from '../../services/UserService';

function AreaGradient({ color, id }: { color: string; id: string }) {
    return (
        <defs>
            <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity={0.5} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
        </defs>
    );
}



const UserByCountrySessionChart = () => {
    const theme = useTheme();
    const [cities, setCities] = useState<string[]>([]);
    const [counts, setCounts] = useState<number[]>([]);
    const currentTheme = useSelector((state: RootState) => state.layout.theme) || 'light';
    const [totalRecordCounts, setTotalRecordCounts] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { rows } = await getUsersInfo();
                setTotalRecordCounts(rows.length);
                const chartRecords = rows.slice(0, 50);

                // Group users by city
                const cityCounts: Record<string, number> = {};
                chartRecords.forEach((user: User) => {
                    if (user.city) {
                        cityCounts[user.city] = (cityCounts[user.city] || 0) + 1;
                    }
                });
                const cityNames = Object.keys(cityCounts);
                const dataCounts = cityNames.map((city) => cityCounts[city]);
                setCities(cityNames);
                setCounts(dataCounts);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    const colorPalette =
        currentTheme === 'dark'
            ? [
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark,
            ]
            : [
                theme.palette.primary.dark,
                theme.palette.primary.main,
                theme.palette.primary.light,
            ];

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Users by city
                </Typography>
                <Stack sx={{ justifyContent: 'space-between' }}>
                    <Stack
                        direction="row"
                        sx={{
                            alignContent: { xs: 'center', sm: 'flex-start' },
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Typography variant="h4" component="p">
                            {totalRecordCounts}
                        </Typography>
                        <Chip size="small" color="success" label="+35%" />
                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Users are located different cities
                    </Typography>
                </Stack>
                <LineChart
                    colors={colorPalette}
                    xAxis={[
                        {
                            scaleType: 'point',
                            data: cities,
                            tickInterval: (i) => (i + 1) % 5 === 0,
                        },
                    ]}
                    series={[
                        {
                            id: 'direct',
                            label: 'Direct',
                            showMark: false,
                            curve: 'linear',
                            stack: 'total',
                            area: true,
                            stackOrder: 'ascending',
                            data: counts,
                        },

                    ]}
                    height={400}
                    margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
                    grid={{ horizontal: true }}
                    sx={{
                        '& .MuiAreaElement-series-organic': {
                            fill: "url('#organic')",
                        },
                        '& .MuiAreaElement-series-referral': {
                            fill: "url('#referral')",
                        },
                        '& .MuiAreaElement-series-direct': {
                            fill: "url('#direct')",
                        },
                    }}
                    slotProps={{
                        legend: {
                            hidden: true,
                        },
                    }}
                >
                    <AreaGradient color={theme.palette.primary.dark} id="organic" />
                    <AreaGradient color={theme.palette.primary.main} id="referral" />
                    <AreaGradient color={theme.palette.primary.light} id="direct" />
                </LineChart>
            </CardContent>
        </Card>
    );
}

export default UserByCountrySessionChart;
