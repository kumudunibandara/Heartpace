import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import Switch from '@mui/material/Switch';
import { LayoutState, toggleTheme } from '../../../redux/reducer';
import { AppDispatch, RootState } from '../../../redux/store';
import { Typography } from '@mui/material';

export default function Header() {
    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector((state: RootState) => state.layout.theme as LayoutState["theme"]);

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTheme = event.target.checked ? "dark" : "light";
        dispatch(toggleTheme(newTheme));
    };

    return (
        <Stack
            direction="row"
            sx={{
                display: { xs: 'flex', md: 'flex' },
                width: '100%',
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                maxWidth: { sm: '100%', md: '1700px' },
                pt: 1.5,
            }}
            spacing={2}
        >
            <NavbarBreadcrumbs />
            <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                <Typography variant="body2" color="textSecondary">
                    Toggle theme
                </Typography>
                <Switch
                    checked={theme === "dark"}
                    onChange={handleToggle}
                    inputProps={{ 'aria-label': 'Toggle theme' }}
                />
                <MenuButton showBadge aria-label="Open notifications">
                    <NotificationsRoundedIcon />
                </MenuButton>

            </Stack>
        </Stack>
    );
}
