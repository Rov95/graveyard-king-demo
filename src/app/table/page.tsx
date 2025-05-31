import Table from '@/components/Table';

export default function Page() {
    return (
        <main className='main-h-screen bg-green-800 text-white p-4'>
            <h1>Game Table</h1>
            <Table />
            <p>This is a table component.</p>
        </main>
    );
}