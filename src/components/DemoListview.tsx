import React from "react";

type Card = {
    id: string;
    title: string;
}

type Props = {
    items: Card[];
}

const DemoListview: React.FC<Props> = ({items}) => {
    return (
        <div className="w-80 px-10 py-4 bg-gray-800">
            <div className="flex justify-items-auto w-full overflow-x-scroll bg-gray-700">
                {items.map((item) =>
                    <div className="ml-2 flex-1 border border-dashed" key={item.id}>
                        <h3 className="font-bold">Title</h3>
                        <span className="text-sm">{item.title}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const cards: Card[] = [
    {
        id: '1',
        title: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, neque.'
    },
    {
        id: '2',
        title: '2 Rerum et dolorum nihil eos aperiam animi labore culpa ratione.'
    },
    {
        id: '3',
        title: '3 Nesciunt magnam corporis fugiat eos deserunt repellendus vel in ullam?'
    },
    {
        id: '4',
        title: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, neque.'
    },
    {
        id: '5',
        title: '5 Rerum et dolorum nihil eos aperiam animi labore culpa ratione.'
    },
    {
        id: '6',
        title: '6 Nesciunt magnam corporis fugiat eos deserunt repellendus vel in ullam?'
    },
];

const DemoListSlot: React.FC = () => {
    const [visible, setVisible] = React.useState(false);
    const [items, setItems] = React.useState(cards);
    return (
        <div className="mx-4 my-4">
            <button onClick={() => setVisible(!visible)} className="px-2 py-1 border rounded text-gray-100 hover:bg-gray-500">
                {visible ? 'Hide Listview' : 'Show Listview'}
            </button>
            {visible && <DemoListview items={items} />}
        </div>
    )
}

export default DemoListSlot;
