import { serve } from '@hono/node-server';
import 'dotenv/config';
import { Hono } from 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';
import counter from './api/counter';
import Home from './pages/Home';

const app = new Hono();

app.get(
	'*',
	jsxRenderer(({ children }) => {
		return (
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>Hono-HTMX</title>
					<script
						src="https://unpkg.com/htmx.org@1.9.10"
						integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
						crossorigin="anonymous"
					></script>
				</head>
				<body>{children}</body>
			</html>
		);
	})
);

app.get('/', (c) => c.render(<Home />));

app.route('/api', counter);

const port = (process.env.PORT || 3000) as number;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
