import { FC } from 'hono/jsx';
import StackItem from './StackItem';

const Stack: FC = async () => {
	return (
		<div class="flex flex-col justify-center items-center gap-4">
			<p class="text-base">This example was built using</p>
			<div class="flex space-x-1 text-xl">
				<StackItem href="https://hono.dev" name="Hono" />,{' '}
				<StackItem href="https://turso.tech" name="Turso" />,{' '}
				<StackItem href="https://tailwindcss.com" name="Tailwind CSS" />,{' '}
				<StackItem href="https://htmx.org" name="HTMX" />,{' '}
				<StackItem href="https://www.koyeb.com" name="Koyeb" />
			</div>
		</div>
	);
};

export default Stack;
