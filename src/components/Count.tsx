import { FC } from 'hono/jsx';

const Count: FC<{ count: number }> = (props) => {
	return (
		<span id="count" class="text-6xl font-medium" hx-swap-oob="true">
			{props.count}
		</span>
	);
};

export default Count;
