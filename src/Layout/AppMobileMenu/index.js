import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import Hamburger from "react-hamburgers";

import cx from "classnames";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Button,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
  DropdownToggle,
} from "reactstrap";
import Ionicon from "react-ionicons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import defaultProfile from "../../assets/utils/images/default-profile.png";

import {
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

class AppMobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mobile: false,
      activeSecondaryMenuMobile: false,
    };
  }

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  toggleMobileSmall = () => {
    let { enableMobileMenuSmall, setEnableMobileMenuSmall } = this.props;
    setEnableMobileMenuSmall(!enableMobileMenuSmall);
  };

  handleLogout = () => {
    this.props.history.replace("/user/login");
  };

  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 280,
    noTouchOpen: false,
    noTouchClose: false,
  };

  render() {
    let { enableMobileMenu } = this.props;

    return (
      <Fragment>
        <div className="app-header__mobile-menu">
          <div onClick={this.toggleMobileSidebar}>
            <Hamburger
              active={enableMobileMenu}
              type="elastic"
              onClick={() =>
                this.setState({ activeMobile: !this.state.activeMobile })
              }
            />
          </div>
        </div>
        <div className="app-header__menu">
          <UncontrolledButtonDropdown>
            <DropdownToggle className="mr-2" color="link">
              {/* <div className="icon-wrapper icon-wrapper-alt rounded-circle"> */}
              {/* <div className="icon-wrapper-bg bg-white" /> */}
              <Ionicon
                beat={false}
                color="#fff"
                fontSize="28px"
                icon="md-notifications-outline"
              />
              {/* <div className="badge badge-dot badge-dot-sm badge-light">
                Notifications
              </div> */}
              {/* </div> */}
            </DropdownToggle>
            <DropdownMenu right className="rm-pointers dropdown-menu-sm p-0">
              <DropdownItem>logout</DropdownItem>
              <DropdownItem>hello12</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <UncontrolledButtonDropdown>
            <DropdownToggle color="link" className="p-0">
              <img
                width={35}
                className="rounded-circle"
                src={defaultProfile}
                alt=""
              />
              <FontAwesomeIcon className="ml-2 opacity-8" icon={faAngleDown} />
            </DropdownToggle>
            <DropdownMenu right className="rm-pointers dropdown-menu-sm p-0">
              <DropdownItem onClick={this.handleLogout}>logout</DropdownItem>
              <DropdownItem>hello12</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>

          {/* <span onClick={this.toggleMobileSmall}>
            <Button
              size="sm"
              className={cx("btn-icon btn-icon-only", {
                active: this.state.activeSecondaryMenuMobile,
              })}
              color="primary"
              onClick={() =>
                this.setState({
                  activeSecondaryMenuMobile: !this.state
                    .activeSecondaryMenuMobile,
                })
              }
            >
              <div className="btn-icon-wrapper">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </Button>
          </span> */}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppMobileMenu));
