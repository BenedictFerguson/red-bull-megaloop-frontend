import { createMemoryRouter, type RouteObject } from 'react-router';
import { FRONTEND_ROUTES } from '@constants/frontend-routes';
import EventStatusPage from '@pages/event-status-page/event-status.page';

const routes: RouteObject[] = [
    {
        path: FRONTEND_ROUTES.start,
        element: <EventStatusPage />,
    },
];

export const router = createMemoryRouter(routes, {
    initialEntries: ['/start'],
    initialIndex: 1,
});
