import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../assets/images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container">
        
        </Button> */}
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />} key={1}>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key={2}>
            <Link to="/cryptocurrencies">cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key={3}>
            <Link to="/exchanges">exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />} key={4}>
            <Link to="/news">news</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
