import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getUsersInfo, User } from '../../services/UserService';

const UserBarChart = () => {
    const theme = useTheme();
    const [cities, setCities] = useState<string[]>([]);
    const [counts, setCounts] = useState<number[]>([]);
    const [totalRecordCounts, setTotalRecordCounts] = useState<number>(0);
    const currentTheme = useSelector((state: RootState) => state.layout.theme) || 'light';

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
                        <Chip size="small" color="error" label="-8%" />
                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Users are located different cities
                    </Typography>
                </Stack>
                <BarChart
                    borderRadius={8}
                    colors={colorPalette}
                    xAxis={
                        [
                            {
                                scaleType: 'band',
                                categoryGapRatio: 0.5,
                                data: cities,
                            },
                        ] as any
                    }
                    series={[
                        {
                            id: 'city-stats',
                            label: 'Users count',
                            data: counts,
                            stack: 'A',
                        }
                    ]}
                    height={400}
                    margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
                    grid={{ horizontal: true }}
                    slotProps={{
                        legend: {
                            hidden: true,
                        },
                    }}
                />
            </CardContent>
        </Card>
    );
}

export default UserBarChart;
