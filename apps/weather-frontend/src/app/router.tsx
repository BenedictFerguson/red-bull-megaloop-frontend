import { createMemoryRouter, type RouteObject } from 'react-router';
import { FRONTEND_ROUTES } from '@constants/frontend-routes';
import WeatherPage from "@pages/weather-page/weather.page.tsx";

const routes: RouteObject[] = [
    {
        path: FRONTEND_ROUTES.start,
        element: <WeatherPage />,
    },
];

export const router = createMemoryRouter(routes, {
    initialEntries: ['/start'],
    initialIndex: 1,
});
