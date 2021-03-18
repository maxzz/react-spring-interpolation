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
        <div className="px-10 py-4 border-2 border-dotted border-red-900">
            <div className="grid grid-flow-col auto-cols-fr overflow-x-scroll bg-gray-800">
                {items.map((item, index) =>
                    <div className="ml-2 border border-dashed overflow-hidden bg-gray-600" key={item.id}>
                        <h3 className="text-sm font-bold text-green-600">Title {index + 1}</h3>
                        <span className="text-xs">{item.title}</span>
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
