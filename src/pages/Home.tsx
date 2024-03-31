import { FC } from 'hono/jsx';
import { getLatestCount } from '../functions/counts';
import Stack from '../components/Stack';
import CountButton from '../components/CountButton';

const Home: FC = async () => {
	const count = await getLatestCount();

	return (
		<>
			<div class="flex w-full flex-col justify-center items-center h-screen space-y-8">
				<div class="text-3xl font-medium">Hello!</div>
				<Stack></Stack>
				<span id="count" class="text-6xl font-medium">
					{count?.count ?? 0}
				</span>
				<div class="flex w-full justify-center items-center space-x-2">
					<CountButton text="Increment" endpoint="increment"></CountButton>
					<CountButton text="Decrement" endpoint="decrement"></CountButton>
				</div>
			</div>
		</>
	);
};

export default Home;
