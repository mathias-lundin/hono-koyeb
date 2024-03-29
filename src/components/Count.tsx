import { FC } from 'hono/jsx';

const Count: FC<{ count: number }> = (props) => {
	return (
		<span id="count" hx-swap-oob="true">
			{props.count}
		</span>
	);
};

export default Count;
