import { createMemoryRouter, type RouteObject } from 'react-router';
import { FRONTEND_ROUTES } from '@constants/frontend-routes';
import LiveScoringPage from '@pages/live-scoring-page/live-scoring.page.tsx';

const routes: RouteObject[] = [
    {
        path: FRONTEND_ROUTES.start,
        element: <LiveScoringPage />,
    },
];

export const router = createMemoryRouter(routes, {
    initialEntries: ['/start'],
    initialIndex: 1,
});
