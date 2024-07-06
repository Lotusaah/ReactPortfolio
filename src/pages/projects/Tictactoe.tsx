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
  const imgSrc = player === 'Circle' ? '/images/icons8-x-coordinate-100.png' : player === 'Squre' ? '/images/icons8-circled-x-100.png' : '';

  return (
    <div id={id} className="bg-gray-200 p-5vh text-center border border-gray-400" onClick={onClick}>
      {player && <img style={{width: '30px', height: '30px'}} src={imgSrc} alt={player} />}
    </div>
  );
};

interface FlexItemProps {
  item: Item;
  onClickElement: (id: string) => void;
}

const FlexItem: React.FC<FlexItemProps> = ({ item, onClickElement }) => {
  return (
    <div className="flex flex-col space-y-4 p-1vh border border-gray-300">
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

  const [player, setPlayer] = useState<string>('Circle');
  const [items, setItems] = useState<Item[]>(initialItems);

  const checkWin = (items: Item[]) => {
    const elements = items.flatMap(item => item.elements);

    const lines = [
      // Horizontal
      ['item-1-1', 'item-1-2', 'item-1-3'],
      ['item-2-1', 'item-2-2', 'item-2-3'],
      ['item-3-1', 'item-3-2', 'item-3-3'],
      // Vertical
      ['item-1-1', 'item-2-1', 'item-3-1'],
      ['item-1-2', 'item-2-2', 'item-3-2'],
      ['item-1-3', 'item-2-3', 'item-3-3'],
      // Diagonal
      ['item-1-1', 'item-2-2', 'item-3-3'],
      ['item-1-3', 'item-2-2', 'item-3-1'],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      const elementA = elements.find(element => element.id === a)?.player;
      const elementB = elements.find(element => element.id === b)?.player;
      const elementC = elements.find(element => element.id === c)?.player;
      if (elementA && elementA === elementB && elementA === elementC) {
        console.log('win');
        return true;
      }
    }
    return false;
  };

  const onClickElement = (id: string) => {
    if (!player) return;

    const updatedItems = items.map(row => ({
      ...row,
      elements: row.elements.map(element =>
        element.id === id && element.player === null
          ? { ...element, player }
          : element
      ),
    }));

    setItems(updatedItems);

    if (checkWin(updatedItems)) {
      alert(`${player} wins!`);
      resetGame();
      return;
    }

    setPlayer(prevPlayer => (prevPlayer === 'Circle' ? 'Squre' : 'Circle'));
  };

  const resetGame = () => {
    setItems(initialItems);
    setPlayer('Circle');
  };

  return (
    <div style={{ height: 'calc(100vh - 164px)' }} className="bg-brand-300">
      <h1 className="tic-new-font text-center font-bold p-2vh tic-dashing bg-clip-text text-transparent">Welcome To</h1>
      <h1 className="tic-new-font text-center font-bold p-2vh pt-0 tic-dashing bg-clip-text text-transparent">Tic-Tac-Toe</h1>
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
        <button onClick={() => setPlayer('Circle')} className="tic-moody tic-dashing bg-white text-black px-4 py-2 m-2 rounded transition duration-300">Squre</button>
        <button onClick={() => setPlayer('Squre')} className="tic-moody-blue tic-dashing-blue text-white px-4 py-2 m-2 rounded transition duration-300">Circle</button>
        <button onClick={resetGame} className="tic-moody-red tic-dashing-red text-white px-4 py-2 m-2 rounded transition duration-300">Reset</button>
      </div>
    </div>
  );
};
