import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Grid, GridRow, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Image
                src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"></Image></Menu.Item>
            <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
            <Menu.Item style={itemStyle}>HOTELS</Menu.Item>
            <Menu.Item style={itemStyle}>CASINOS</Menu.Item>
            <Menu.Item style={itemStyle}>LIVE</Menu.Item>
            <Menu.Item style={itemStyle}>SHOP</Menu.Item>
            <Menu.Item style={itemStyle}>BLOG</Menu.Item>
            <Menu.Item style={itemStyle}>REWARDS</Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleImage extends React.Component {
  render() {
    return (
        <Image fluid src="http://www.hardrock.com/cafes/honolulu/files/2384/Honolulu_Entrance.jpg"></Image>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <footer className="footer-background">
          <Container>
            <Grid centered rows="2">
              <GridRow className="footer-one">
                HARD ROCK CAFE HONOLULU
              </GridRow>

              <GridRow>
                <Icon className="phone"/><span>+1-808-955-7383</span>
                &nbsp; &nbsp; &nbsp;
                <Icon className="mail"/><span>Email Us</span>
                &nbsp; &nbsp; &nbsp;
                <Icon className="home"/><span>280 Beachwalk, Honolulu, Hawaii 96815</span>
                &nbsp; &nbsp; &nbsp;
                <Icon className="twitter"/>
                <Icon className="facebook f"/>
                <Icon className="instagram"/>
                <Icon className="pinterest"/>
                <Icon className="tripadvisor"/>
              </GridRow>
            </Grid>

          </Container>
        </footer>
    );
  }
}

class HardRock extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<HardRock/>, document.getElementById('root'));
