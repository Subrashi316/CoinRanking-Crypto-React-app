import millify from "millify";
import {Link} from 'react-router-dom';

const CryptoCard = ({ coin }) => {
  return (
    <Link to={`/crypto/${coin.uuid}`} style={{textDecoration:'none'}}>
    <div style={{width:'100%'}}>
      <div  className="card card-dark coin-content">
          <div className="card-img-container">
            <img
              src={coin.iconUrl}
              alt={coin.name}
              className="card-header-img"
            />
            <h4 className="coin-card-heading">{coin.name}</h4>
          </div>
          <div className="card-info">
            <div className="card-info-box">
              <p className="coin-item-text">Rank</p>
              <p className="coin-item-text">{coin.rank}</p>
            </div>

            <div className="card-info-box">
              <p className="coin-item-text">Price</p>
              <p className="coin-item-text">${Number(coin.price).toFixed(2)}</p>
            </div>

            <div className="card-info-box">
              <p className="coin-item-text">Market Cap</p>
              <p className="coin-item-text">{millify(coin.marketCap)}</p>
            </div>

            <div className="card-info-box">
              <p className="coin-item-text">Change</p>
              <p className={`coin-item-text ${+coin.change > 0 ? 'positive' : 'negitive'}`}>{+coin.change > 0 ? '+':''}{(coin.change)}</p>
            </div>
          </div>
      </div>
    </div>
    </Link>
  );
};

export default CryptoCard;
