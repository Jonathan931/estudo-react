import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import MenuComp from "../components/UI/Menu";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import Despesas from "../components/Despesas";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

class ScreensIndex extends PureComponent {
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            {this.isConnected() && (
              <MenuComp style={{ position: "absolute", left: -10 }} />
            )}
          </Header>
          <Layout>
            <Content id="page-wrap">
              <Switch>
                {this.isConnected() && (
                  <Route path="/" exact={true} component={Dashboard} />
                )}
                {!this.isConnected() && (
                  <Route path="/login" component={Login} />
                )}
                {this.isConnected() && (
                  <Route path="/despesas" exact={true} component={Despesas} />
                )}
                {/* <Route path="/produto" component={Produto} /> */}
                {!this.isConnected() && <Redirect to="/login" />}
                {this.isConnected() && <Redirect to="/" />}
              </Switch>
            </Content>
          </Layout>
          <Footer style={{ textAlign: "center" }}>
            GERFIN ©2019 Criado por Jonathan Matheus
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }

  isConnected = () => {
    return !!this.props.auth.uid;
  };
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(ScreensIndex);
