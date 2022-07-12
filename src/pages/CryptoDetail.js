import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import Parser from "react-html-parser";
import { useGetCryptoDetailQuery } from "../utils/API";
import millify from "millify";
import SparklineChart from "../components/SparklineChart";
import Links from "../components/Links";
import LineChart from "../components/LineChart";
import Spinner from '../components/Spinner';
import Error from '../components/Error';

const CryptoDetail = () => {
  const { id } = useParams();
  const { data,isError,error } = useGetCryptoDetailQuery(id);
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    if (!data) return;
    setCoinData(data.data.coin);
  }, [data]);


  if(isError) {
    return (
        <Error message={error.error} />
    )
  }

  if (!coinData) return <Spinner />;


  return (
    <div>
      <div className="top-header">
        
          <img
            src={coinData.iconUrl}
            className="top-icon"
            alt={coinData.name}
          />
        <h4 className="coin-detail-heading">
          {`${coinData.name} (${coinData.symbol})`}
        </h4>
      </div>
      <LineChart id={id} color={coinData.color} />

      <div className="detail-table">
        {/* first table*/}

        <div className="table-container">
          <h4 className="coin-card-heading">Crypto</h4>

          <div className="table-item">
            <p className="coin-item-text">Rank</p>
            <p className="coin-item-text">{millify(coinData.rank)}</p>
          </div>

          <div className="table-item">
            <p className="coin-item-text">Price</p>
            <p className="coin-item-text">{millify(coinData.price)}</p>
          </div>

          <div className="table-item">
            <p className="coin-item-text">Price at</p>
            <p className="coin-item-text">{millify(coinData.priceAt)}</p>
          </div>

          <div className="table-item">
            <p className="coin-item-text">24h Volume</p>
            <p className="coin-item-text">
              {millify(coinData["24hVolume"])}
            </p>
          </div>
        </div>

        {/* second table*/}

        <div className="table-container">
          <h4 className="coin-card-heading">Market</h4>

          <div className="table-item">
            <p className="coin-item-text">Market Cap</p>
            <p className="coin-item-text">
              {millify(coinData.marketCap)}
            </p>
          </div>

          <div className="table-item">
            <p className="coin-item-text">Number of Markets</p>
            <p className="coin-item-text">
              {millify(coinData.numberOfMarkets)}
            </p>
          </div>

          <div className="table-item">
            <p className="coin-item-text">Number of Exchanges</p>
            <p className="coin-item-text">
              {millify(coinData.numberOfExchanges)}
            </p>
          </div>

          <div className="table-item">
            <p className="coin-item-text">Listed at</p>
            <p className="coin-item-text">
              {millify(coinData.listedAt)}
            </p>
          </div>
        </div>

        {/*Spark line chart*/}

        <div className="table-container">
          <SparklineChart data={coinData.sparkline} change={coinData.change} />
        </div>
      </div>
      <div className="crypto-info">
        <div className="crypto-info-about">
          <h4 className="coin-card-heading" style={{fontWeight:'bold'}}>
            About {coinData.name}
          </h4>
          {Parser(coinData.description)}
        </div>
        <Links Links={coinData.links} />
      </div>
    </div>
  );
};

export default React.memo(CryptoDetail);
