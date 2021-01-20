import { useState } from "react";
import Coin from "./Coin";
import choice from "./random";
import headsImg from "./heads.jpg";
import tailsImg from "./tails.jpg";

/* 
* Props:
* - array of image paths
* 
* States:
* - headsCount
* - tailsCount
* - sideOfCoin 
*
* App -> CoinFlip -> Coin
*/
function CoinFlip(props) {
  const [coin, setCoin] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  function handleClick() {
    const randomSide = choice(props.coins);
    setCoin(randomSide);

    if (randomSide.side === "heads") {
      setHeadsCount(headsCount + 1);
    } else {
      setTailsCount(tailsCount + 1);
    }
  }

  return (
    <div className="CoinFlip">
      <h1 className="CoinFlip-title">Let's flip a coin!</h1>
      <div className="CoinFlip-display">
        {coin ? <Coin img={coin.imgSrc} side={coin.side} /> : "" }
        <button onClick={handleClick}>Flip Meeee</button>
        <p className="CoinFlip-message">Out of {headsCount + tailsCount}, there have been {headsCount} heads and {tailsCount} tails </p>
      </div>
    </div>
  );

}

CoinFlip.defaultProps = {
  coins: [
    {
      imgSrc: headsImg,
      side: "heads"
    },
    {
      imgSrc: tailsImg,
      side: "tails"
    }
  ]
};

export default CoinFlip;