import { fetchPostcards } from '@/app/lib/data';
import PostcardsTable from '@/app/ui/postcards/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Postcards',
};

export default async function Page() {
    // const query = searchParams?.query || '';

    const cards = await fetchPostcards();

    return (
        <main>
            <PostcardsTable cards={cards} />
        </main>
    );
}