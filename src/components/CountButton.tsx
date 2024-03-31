import { FC } from 'hono/jsx';
import { ApiEndpoint } from '../api/consts';

const CountButton: FC<{ text: string; endpoint: ApiEndpoint }> = async ({
	text,
	endpoint,
}) => {
	return (
		// Disable button while the request is being processed
		<button
			type="button"
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input border-slate-400 bg-background hover:bg-slate-400 hover:text-slate-700 py-2 h-auto px-3"
			hx-post={`/api/${endpoint}`}
			hx-swap="none"
			hx-disabled-elt="this"
		>
			{text}
		</button>
	);
};

export default CountButton;
