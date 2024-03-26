import Home from '@/components/Home';
import { getResources, getResourcesPlaylist } from '@/sanity/actions';

export const revalidate = 900;

interface Props {
	searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
	const resources = await getResources({
		query: searchParams?.query || '',
		category: searchParams?.category || '',
		page: '1',
	});

	const resourcesPlaylist = await getResourcesPlaylist();

	return (
		<Home
			searchParams={searchParams}
			resources={resources}
			resourcesPlaylist={resourcesPlaylist}
		/>
	);
};

export default Page;
