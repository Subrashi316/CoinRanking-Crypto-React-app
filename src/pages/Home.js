import React,{useState,useEffect} from 'react';
import { useGetCryptosQuery } from '../utils/API';
import millify from 'millify'
import TotalMarketsImg from "../assets/market.svg";
import CryptocurrenciesImg from "../assets/cryptocurrencies.svg";
import VolumeImg from "../assets/24h-volume.svg";
import MarketCapImg from "../assets/market-cap.svg";
import ExchangesImg from "../assets/exchanges.svg";
import CryptoContainer from '../components/CryptoContainer';
import Spinner from '../components/Spinner';
import Error from '../components/Error';




const Home = () => {
  const {data,error,isError} = useGetCryptosQuery();
  const [coinState,setCoinState] = useState(null);


  useEffect(()=>{
    if(!data) return;
    setCoinState(data?.data);
  },[data]);

  if(isError) {
    return <Error message={error.error} />
  }

  if(!coinState) return <Spinner />;


  const { stats, coins } = coinState;


  return (
    <div>
      <h1 className="mui-heading text-center">CRYPTO STATS</h1>

      <div className="statsContainer">
        <div className="card card-container">
          <div className="card-item">
            <p className="stats-item-sub-text">Total Coins</p>
            <p className="stats-item-main-text">{stats.totalCoins}</p>
          </div>
          <div className="card-item-img-container bg-clr-orange ">
            <img
              src={CryptocurrenciesImg}
              className="card-item-img"
              alt="Total Coins"
            />
          </div>
        </div>

        <div className="card card-container">
          <div className="card-item">
            <p className="stats-item-sub-text">24h Volume</p>
            <p className="stats-item-main-text">{millify(stats.total24hVolume)}</p>
          </div>
          <div className="card-item-img-container bg-clr-blue ">
            <img src={VolumeImg} className="card-item-img" alt="24h Volume" />
          </div>
        </div>

        <div className="card card-container">
          <div className="card-item">
            <p className="stats-item-sub-text">Total Exchanges</p>
            <p className="stats-item-main-text">{stats.totalExchanges}</p>
          </div>
          <div className="card-item-img-container bg-clr-green ">
            <img src={ExchangesImg} className="card-item-img" alt="exchanges" />
          </div>
        </div>

        <div className="card card-container">
          <div className="card-item">
            <p className="stats-item-sub-text">Total Market Cap</p>
            <p className="stats-item-main-text">{millify(stats.totalMarketCap)}</p>
          </div>
          <div className="card-item-img-container bg-clr-purple">
            <img
              src={MarketCapImg}
              className="card-item-img"
              alt="market cap"
            />
          </div>
        </div>

        <div className="card card-container">
          <div className="card-item">
            <p className="stats-item-sub-text">Total Market</p>
            <p className="stats-item-main-text">{stats.totalMarkets}</p>
          </div>
          <div className="card-item-img-container bg-clr-pink ">
            <img
              style={{ width: "45px" }}
              src={TotalMarketsImg}
              className="card-item-img"
              alt="total market"
            />
          </div>
        </div>
      </div>

      <h2 className="mui-heading-2">TOP 100 CRYPTO CURRENCIES</h2>

      <CryptoContainer  coins={coins} />
      
    </div>
  );
};

export default React.memo(Home);

