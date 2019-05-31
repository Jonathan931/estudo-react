import React, { PureComponent } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Icon } from "antd";
import { signOut } from "../../../store/actions/authActions";
import logo from "../../../assets/logo.png";
import "./Menu.css";

class SideBar extends PureComponent {
  state = {
    menu: false
  };

  render() {
    const { menu } = this.state;
    const closeAllMenusOnEsc = e => {
      e = e || window.event;
      if (e.key === "Escape" || e.keyCode === 27) {
        this.setState({ menu: false });
      }
    };
    return (
      <Menu
        burgerButtonClassName="hn-menu-button"
        burgerBarClassName="hn-menu-button-bar"
        customOnKeyDown={closeAllMenusOnEsc}
        pageWrapId={"page-wrap"}
        isOpen={menu}
        onStateChange={this.handleStateChange}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <img src={logo} alt={"logo"} style={{ width: 50, height: 50 }} />
          <h3>GERFIN</h3>
        </div>

        <Link className="menu-item" to="/" onClick={this.closeMenu}>
          <Icon type="dashboard" />
          {"   "}Dashboard
        </Link>
        <Link className="menu-item" to="/" onClick={this.closeMenu}>
          <Icon type="rise" />
          {"   "}Receitas
        </Link>
        <Link className="menu-item" to="/despesas" onClick={this.closeMenu}>
          <Icon type="fall" />
          {"   "}Despesas
        </Link>

        <Link className="menu-item" to="/" onClick={this.handleSignOut}>
          <Icon type="exit" />
          {"   "}Sair
        </Link>
      </Menu>
    );
  }

  handleSignOut = () => {
    this.closeMenu();
    this.props.signOut();
  };

  closeMenu = () => {
    this.setState({ menu: false });
  };

  isMenuOpen = state => {
    return state.isOpen;
  };

  handleStateChange = state => {
    this.setState({ menu: state.isOpen });
  };
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SideBar);
