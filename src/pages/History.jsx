import React from 'react';
import ListGrid from '../components/ListGrid';

function History() {
    const renderTest = [0, 1, 2, 3];

    return (
        <div>
            <header>
                <h1 className="text-[45px] font-bold dark:text-white">
                    Lịch sử
                </h1>
            </header>
            <main className="mt-4">
                <ListGrid
                    title="Hôm qua"
                    data={renderTest}
                    col={1}
                    showFullInfo
                />
                <ListGrid
                    title="Hôm qua"
                    data={renderTest}
                    col={1}
                    showFullInfo
                />
            </main>
        </div>
    );
}

export default History;
