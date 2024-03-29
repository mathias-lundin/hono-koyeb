import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import counter from './api/counter';
import Home from './pages/Home';

const app = new Hono();

app.get('/', (c) => c.html(<Home />));

app.route('/api', counter);

const port = (process.env.PORT || 3000) as number;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
