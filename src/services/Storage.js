// all localstorage operation will be reside here
import cookie from "react-cookies";

function setLocalItem(key, value) {
  localStorage.setItem(key, value);
}

function getLocalItem(key) {
  return localStorage.getItem(key);
}

function removeLocalItem(key) {
  return localStorage.removeItem(key);
}

function setCookie(name, value, options) {
  cookie.save(name, value, options);
}

function getCookie(name) {
  return cookie.load(name);
}

function removeCookie(name) {
  cookie.remove(name);
}

export default class Storage {
  static setPlaceOrderRedeemItems(cartItems) {
    if (cartItems && cartItems.length > 0) {
      setLocalItem("redeem-items", JSON.stringify(cartItems));
    } else {
      setLocalItem("redeem-items", JSON.stringify([]));
    }
  }

  static getRedeemCartItems() {
    let cartItems = getLocalItem("redeem-items");
    if (cartItems) {
      return JSON.parse(cartItems);
    }
    return [];
  }

  static removePlaceOrderRedeemItems() {
    removeLocalItem("redeem-items");
  }

  static setNotificationDetail(data) {
    setLocalItem("notification-data", JSON.stringify(data));
  }
  static getNotificationDetail() {
    let data = getLocalItem("notification-data");
    return JSON.parse(data);
  }

  static removeNotificationDetail() {
    removeLocalItem("notification-data");
  }

  static setTokenDetail(token) {
    setLocalItem("token", JSON.stringify(token));
  }

  static getTokenDetail() {
    let token = getLocalItem("token");
    return JSON.parse(token);
  }

  static removeTokenDetail() {
    removeLocalItem("token");
  }

  static setClientID(id) {
    setLocalItem("client_id", id);
  }

  static getClientID() {
    let id = getLocalItem("client_id");
    return id;
  }

  static setClientName(name) {
    setLocalItem("client_name", name);
  }

  static getClientName() {
    let name = getLocalItem("client_name");
    return name;
  }

  static setUserDetail(userDetail) {
    setLocalItem("user-detail", JSON.stringify(userDetail));
  }

  static setUserEmail(email) {
    setLocalItem("user-email", email);
  }

  static getUserEmail() {
    return getLocalItem("user-email");
  }

  static getUserDetail() {
    let userDetail = getLocalItem("user-detail");
    return JSON.parse(userDetail);
  }

  static removeUserDetail() {
    removeLocalItem("user-detail");
  }

  static setHideNavBar(navBar) {
    setLocalItem("nav-bar-hide", JSON.stringify(navBar));
  }

  static getHideNavBar() {
    let navBar = getLocalItem("nav-bar-hide");
    return JSON.parse(navBar);
  }

  static removeHideNavBar() {
    removeLocalItem("nav-bar-hide");
  }

  static setAddCustomerData(data) {
    setLocalItem("add_customer", JSON.stringify(data));
  }

  static getAddCustomerData() {
    let navBar = getLocalItem("add_customer");
    return JSON.parse(navBar);
  }

  static removeAddCustomerData() {
    removeLocalItem("add_customer");
  }

  static setKeepMeLoggedInCookie(value) {
    if (value) {
      setCookie("KeepMeLoggedIn", true, { maxAge: 21321231312 });
    } else {
      setCookie("KeepMeLoggedIn", false, null);
    }
  }

  static getKeepMeLoggedInCookie() {
    return getCookie("KeepMeLoggedIn");
  }

  static removeKeepMeLoggedInCookie() {
    removeCookie("KeepMeLoggedIn");
  }

  static setPlaceOrderCartItems(cartItems) {
    if (cartItems && cartItems.length > 0) {
      setLocalItem("cart-items", JSON.stringify(cartItems));
    } else {
      setLocalItem("cart-items", JSON.stringify([]));
    }
  }

  static getPlaceOrderCartItems() {
    let cartItems = getLocalItem("cart-items");
    if (cartItems) {
      return JSON.parse(cartItems);
    }
    return [];
  }

  static removePlaceOrderCartItems() {
    removeLocalItem("cart-items");
  }

  static setNavigationLevelDetail(key, token) {
    setCookie(key, JSON.stringify(token));
    // setLocalItem(key, JSON.stringify(token));
  }

  static getNavigationLevelDetail(key) {
    let navLevelDetail = getCookie(key);
    // let navLevelDetail = getLocalItem(key);
    return navLevelDetail;
  }

  static removeNavigationLevelDetail(key) {
    removeCookie(key);
  }

  static setAddCustomerSuccessDetail(data) {
    setLocalItem("add_customer_success_detail", JSON.stringify(data));
  }

  static getAddCustomerSuccessDetail() {
    let detail = getLocalItem("add_customer_success_detail");
    if (detail) {
      return JSON.parse(detail);
    } else {
      return null;
    }
  }

  static removeAddCustomerSuccessDetail() {
    removeLocalItem("add_customer_success_detail");
  }
}
