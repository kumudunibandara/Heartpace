import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';
import { getUsersInfo, User } from '../../services/UserService';
import { Card, CardContent, Typography, Stack, Chip, Box } from '@mui/material';

type ChartDataItem = {
    id: number;
    value: number;
    label: string;
    color?: string;
};

export default function UserPieChart() {
    const theme = useTheme();
    const [chartData, setChartData] = React.useState<ChartDataItem[]>([]);
    const [totalRecordCounts, setTotalRecordCounts] = React.useState<number>(0);
    const colorPalette =
        theme.palette.mode === 'dark'
            ? [theme.palette.primary.light, theme.palette.primary.main, theme.palette.primary.dark]
            : [theme.palette.primary.dark, theme.palette.primary.main, theme.palette.primary.light];

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const { rows } = await getUsersInfo();
                setTotalRecordCounts(rows.length);
                const chartRecords = rows.slice(0, 50);
                const countryCounts: Record<string, number> = {};
                chartRecords.forEach((user: User) => {
                    if (user.country) {
                        countryCounts[user.country] = (countryCounts[user.country] || 0) + 1;
                    }
                });
                const seriesData: ChartDataItem[] = Object.keys(countryCounts).map((country, index) => ({
                    id: index,
                    value: countryCounts[country],
                    label: country,
                    color: colorPalette[index % colorPalette.length],
                }));
                setChartData(seriesData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Card variant="outlined" sx={{ width: '100%', bgcolor: 'background.paper', color: 'text.primary' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    Users by country
                </Typography>
                <Stack sx={{ justifyContent: 'space-between' }}>
                    <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
                        <Typography variant="h4">{totalRecordCounts}</Typography>
                        <Chip size="small" color="success" label="+59%" />
                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Users are located in different countries
                    </Typography>
                </Stack>
                <Box>
                    <PieChart
                        series={[{ data: chartData }]}
                        width={400}
                        height={400}
                        slotProps={{ legend: { hidden: true } }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}
