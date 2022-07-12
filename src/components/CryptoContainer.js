import { useState, Fragment,useEffect } from "react";
import CryptoCard from "./CryptoCard";
import {MdSearch} from 'react-icons/md';

const CryptoContainer = ({coins}) => {
  const [coinsState, setCoinsState] = useState(coins);
  const [search,setSearch] = useState('');


  const onChangeHandler = (e)=>{
    setSearch(e.target.value);
  }

  useEffect(()=>{
      setCoinsState(coins.filter((val)=> val.name.toLowerCase().includes(search.toLowerCase())))
  },[search,coins]);


  return (
    <Fragment>
      <div className="search-box-container">
      <MdSearch style={{width:'40px',height:'30px',color:'#000'}} />
        <input
          type="text"
          className="input"
          style={{ flex: "1" }}
          placeholder="Search"
          onChange={onChangeHandler}
          value={search}
        />
      </div>
      <section className="cryptoContainer">
        {coinsState.map((item) => (
          <CryptoCard key={item.uuid} coin={item} />
        ))}
      </section>
    </Fragment>
  );
};

export default CryptoContainer;
