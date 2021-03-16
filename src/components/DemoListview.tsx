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
        <div className="flex px-10 py-4 w-80 overflow-x-scroll">
            {items.map((item) => 
                <div className="text-sm" key={item.id}>
                    {item.title}
                </div>
            )}
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
    const [items, setItems] = React.useState(cards);
    return (
        <div className="mx-4 my-4">
            <button className="px-2 py-1 border rounded text-gray-100 hover:bg-gray-500">Show</button>
            <DemoListview items={items} />
        </div>
    )
}

export default DemoListSlot;
