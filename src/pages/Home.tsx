import { FC } from 'hono/jsx';
import { getLatestCount } from '../functions/counts';

const Home: FC = async () => {
	const count = await getLatestCount();

	return (
		<>
			<h1>Hello Hono-HTMX!</h1>
			<h2>
				Count: <span id="count">{count?.count ?? 0}</span>
			</h2>
			<button hx-post="/api/increment" hx-swap="none">
				Increment
			</button>
			<button hx-post="/api/decrement" hx-swap="none">
				Decrement
			</button>
		</>
	);
};

export default Home;
