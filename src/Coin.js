/* 
* Props:
* - img
* - side
*
* State: null
*
* CoinFlip -> Coin
*/
function Coin({img, side}) {
  return (
    <div className="Coin">
      <img className="Coin-img" src={img} alt={side}></img>
    </div>
  );
}

export default Coin;