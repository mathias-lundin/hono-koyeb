import { FC } from 'hono/jsx';

const StackItem: FC<{ href: string; name: string }> = async ({
	href,
	name,
}) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			class="underline hover:bg-slate-400 hover:text-slate-700"
		>
			{name}
		</a>
	);
};

export default StackItem;
