import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from "../services/cryptoApi"
import { CryptocurrenciesPage } from "../"
const { Title } = Typography;
 
const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10)
  const globalState = data?.data?.stats;
  if(isFetching) return "Loading..."
  return (
    <>
      <Title level={2} className="heading" style={{padding: "1rem"}}>Global Crypto Stats</Title>
      <Row gutter={[32, 32]} style={{padding: "1rem"}}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalState.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalState.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalState.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalState.total24hVolume)} /></Col>
        {/* <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col> */}
        <Col span={12}><Statistic title="Total Markets" value={millify(globalState.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container" style={{padding: "1rem"}}>
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <div style={{padding: "1rem"}}>
        <CryptocurrenciesPage simplified />
      </div>
      <div className="home-heading-container" style={{padding: "1rem"}}>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      {/* <News simplified /> */}
    </>
  );
};

export default Homepage;
