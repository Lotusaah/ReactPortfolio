import { useState } from "react";
import './Tictactoe.css';

interface Element {
  id: string;
  player: string | null;
}

interface Item {
  elements: Element[];
}

interface StackedElementProps {
  id: string;
  player: string | null;
  onClick: () => void;
}

const StackedElement: React.FC<StackedElementProps> = ({ id, player, onClick }) => {
  const imgSrc = player === 'White' ? '../../components/icons8-circled-x-100.png' : player === 'Blue' ? '../../components/icons8-x-coordinate-100.png' : '';

  return (
    <div id={id} className="bg-gray-200 p-4 text-center border border-gray-400" onClick={onClick}>
      {player && <img src={imgSrc} alt={player} />}
    </div>
  );
};

interface FlexItemProps {
  item: Item;
  onClickElement: (id: string) => void;
}

const FlexItem: React.FC<FlexItemProps> = ({ item, onClickElement }) => {
  return (
    <div className="flex flex-col space-y-2 p-4 border border-gray-300">
      {item.elements.map((element, index) => (
        <StackedElement key={index} id={element.id} player={element.player} onClick={() => onClickElement(element.id)} />
      ))}
    </div>
  );
};

interface FlexRowProps {
  items: Item[];
  onClickElement: (id: string) => void;
}

const FlexRow: React.FC<FlexRowProps> = ({ items, onClickElement }) => {
  return (
    <div className="flex space-x-4">
      {items.map((item, index) => (
        <FlexItem key={index} item={item} onClickElement={onClickElement} />
      ))}
    </div>
  );
};

export const Tictactoe: React.FC = () => {
  const initialItems: Item[] = [
    {
      elements: [
        { id: 'item-1-1', player: null },
        { id: 'item-1-2', player: null },
        { id: 'item-1-3', player: null },
      ],
    },
    {
      elements: [
        { id: 'item-2-1', player: null },
        { id: 'item-2-2', player: null },
        { id: 'item-2-3', player: null },
      ],
    },
    {
      elements: [
        { id: 'item-3-1', player: null },
        { id: 'item-3-2', player: null },
        { id: 'item-3-3', player: null },
      ],
    },
  ];

  const [player, setPlayer] = useState<string | null>(null);
  const [items, setItems] = useState<Item[]>(initialItems);

  const onClickElement = (id: string) => {
    if (!player) return;

    setItems(prevItems =>
      prevItems.map(row => ({
        ...row,
        elements: row.elements.map(element =>
          element.id === id && element.player === null
            ? { ...element, player }
            : element
        ),
      }))
    );

    setPlayer(prevPlayer => (prevPlayer === 'White' ? 'Blue' : 'White'));
  };

  const resetGame = () => {
    setItems(initialItems);
    setPlayer(null);
  };

  return (
    <div style={{ height: 'calc(100vh - 164px)' }} className="bg-brand-300">
      <h1 className="new-font text-center font-bold p-2vh">Welcome To</h1>
      <h1 className="new-font text-center font-bold p-2vh pt-0">Tic-Tac-Toe</h1>
      <div className="flex bg-brand-400 mt-3vh">
        <div className="flex-grow bg-brand-400 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 bg-brand-400 h-40vh">
          <div className="bg-brand-500 rounded-3xl">
            <div className="flex justify-center items-center h-40vh">
              <FlexRow items={items} onClickElement={onClickElement} />
            </div>
          </div>
        </div>
        <div className="flex-grow bg-brand-400 hidden sm:block lg:flex-grow-1"></div>
      </div>
      <div className="text-center mt-4">
        <button onClick={() => setPlayer('White')} className="bg-white text-black px-4 py-2 m-2 rounded hover:bg-brand-100 hover:shadow-lg transition duration-300">White</button>
        <button onClick={() => setPlayer('Blue')} className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-brand-100 hover:shadow-lg transition duration-300">Blue</button>
        <button onClick={resetGame} className="bg-red-700 text-white px-4 py-2 m-2 rounded hover:bg-brand-100 hover:shadow-lg transition duration-300">Reset</button>
      </div>
    </div>
  );
};
