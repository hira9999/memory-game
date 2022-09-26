import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const items = [
    { item: "helmet", matched: false },
    { item: "ring", matched: false },
    { item: "shield", matched: false },
    { item: "scroll", matched: false },
    { item: "potion", matched: false },
    { item: "sword", matched: false },
  ];
  const [cards, setCards] = useState([]);
  const [firstPick, setFirstPick] = useState("");
  const [secondPick, setSecondPick] = useState("");

  const suffleCards = () => {
    let suffled = [...items, ...items]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() };
      });
    setCards(suffled);
  };

  const handleClick = (card) => {
    firstPick ? setSecondPick(card) : setFirstPick(card);
  };

  useEffect(() => {
    if (firstPick && secondPick && firstPick !== secondPick) {
      if (firstPick.item === secondPick.item) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.item === firstPick.item) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [firstPick, secondPick, setCards, cards]);

  const resetTurn = () => {
    setFirstPick(null);
    setSecondPick(null);
  };

  const id_list = ["muzi", "frodo", "apeach", "neo"];
  const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ];
  const k = 2;

  function solution(id_list, report, k) {
    let reports = [...new Set(report)].map((a) => {
      return a.split(" ");
    });

    const answer = [];
    return answer;
  }

  console.log(solution(id_list, report, k));

  const insert = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

  const a = (v) => {
    let overlap = [];
    let count = 0;
    const sort = v.sort((a, b) => {
      return b - a;
    });
    sort.forEach((el, i) => {
      if (count < 7 && overlap.length < 3) {
        if (overlap.find((v) => v === el)) {
          count += 1;
        } else {
          overlap.push(el);
          count += 1;
        }
      }
      return;
    });
    return count;
  };

  console.log(a(insert));
  return (
    <div>
      <h1>Memory Game</h1>
      <button onClick={() => suffleCards()}>Shuffle Cards</button>
      <div className="cards">
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              card={card}
              handleClick={handleClick}
              flipped={
                card === firstPick || card === secondPick || card.matched
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
