import { useState } from "react";
import './Tictactoe.css';

const StackedElement = ({ id, text, player, onClick }) => {
  const imgSrc = player === 'White' ? 'path/to/white/player/image.png' : player === 'Blue' ? 'path/to/blue/player/image.png' : '';

  return (
    <div id={id} className="bg-gray-200 p-4 text-center border border-gray-400" onClick={onClick}>
      <img src={imgSrc} alt={text} />
    </div>
  );
};

const FlexItem = ({ item, player, onClickElement }) => {
  return (
    <div className="flex flex-col space-y-2 p-4 border border-gray-300">
      {item.elements.map((element, index) => (
        <StackedElement key={index} id={element.id} text={element.text} player={element.player} onClick={() => onClickElement(element.id)} />
      ))}
    </div>
  );
};

const FlexRow = ({ items, player, onClickElement }) => {
  return (
    <div className="flex space-x-4">
      {items.map((item, index) => (
        <FlexItem key={index} item={item} player={player} onClickElement={onClickElement} />
      ))}
    </div>
  );
};

export const Tictactoe = () => {
  const [player, setPlayer] = useState<string | null>(null);
  const [items, setItems] = useState([
    {
      elements: [
        { id: 'item-1-1', text: 'Item 1.1', player: null },
        { id: 'item-1-2', text: 'Item 1.2', player: null },
        { id: 'item-1-3', text: 'Item 1.3', player: null },
      ],
    },
    {
      elements: [
        { id: 'item-2-1', text: 'Item 2.1', player: null },
        { id: 'item-2-2', text: 'Item 2.2', player: null },
        { id: 'item-2-3', text: 'Item 2.3', player: null },
      ],
    },
    {
      elements: [
        { id: 'item-3-1', text: 'Item 3.1', player: null },
        { id: 'item-3-2', text: 'Item 3.2', player: null },
        { id: 'item-3-3', text: 'Item 3.3', player: null },
      ],
    },
  ]);

  const onClickElement = (id) => {
    setItems(prevItems =>
      prevItems.map(item => ({
        elements: item.elements.map(element =>
          element.id === id ? { ...element, player: player } : element
        ),
      }))
    );
  };

  return (
    <div style={{ height: 'calc(100vh - 172px)' }} className="bg-brand-300">
      <h1 className="new-font text-center font-bold p-2vh">Welcome To</h1>
      <h1 className="new-font text-center font-bold p-2vh pt-0">Tic-Tac-Toe</h1>
      <div className="flex bg-brand-400 mt-3vh">
        <div className="flex-grow bg-brand-400 hidden sm:block lg:flex-grow-1"></div>
        <div className="flex-grow-2 bg-brand-400 h-40vh">
          <div className="bg-brand-500 rounded-3xl">
            <div className="flex justify-center items-center h-40vh">
              <FlexRow items={items} player={player} onClickElement={onClickElement} />
            </div>
          </div>
        </div>
        <div className="flex-grow bg-brand-400 hidden sm:block lg:flex-grow-1"></div>
      </div>
      <button onClick={() => setPlayer('White')}>White</button>
      <button onClick={() => setPlayer('Blue')}>Blue</button>
    </div>
  );
};
