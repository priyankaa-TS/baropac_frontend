export default class Validation {
  // add email validation logic here
  static emailValidator(control) {
    const value = control.value;
    control.nullValue = false;
    control.invalidEmail = false;
    if (value === "") {
      control.nullValue = true;
    }

    // if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value))) {
    //   control.invalidEmail = true;
    // }

    let lastAtPos = value.lastIndexOf("@");
    let lastDotPos = value.lastIndexOf(".");
    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        value.indexOf("@@") == -1 &&
        lastDotPos > 2 &&
        value.length - lastDotPos > 2
      )
    ) {
      // if (!(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(value))) {
      //   control.invalidEmail = true;
      // }
      control.invalidEmail = true;
    } else {
      control.invalidEmail = false;
    }
    return control;
  }

  static notNullValidator(control) {
    const value = control.value;
    control.nullValue = false;
    if (value === "" || value === null || value === undefined) {
      control.nullValue = true;
    } else {
      control.nullValue = false;
    }
    return control;
  }

  // add password validation logic here
  static passwordValidator(control) {
    const value = control.value;
    control.nullPassword = false;
    if (value === "") {
      control.nullPassword = true;
    }
    return control;
  }

  static validateLength(control, length) {
    const value = control.value;
    if (value !== null && value !== "") {
      if (value.length === length) {
        control.invalidLength = null;
      } else {
        control.invalidLength = true;
      }
    } else if (value === null || value === "") {
      control.invalidLength = null;
    } else {
    }
    return control;
  }

  static validatePhoneNumber(control) {
    const regex = /^[0-9]*$/;
    const value = control.value;
    if (!(value === null || value === "")) {
      if (value.length !== 10) {
        control.invalidPhone = true;
        return control;
      }
      if (!value.match(regex)) {
        control.invalidPhone = true;
      } else {
        control.invalidPhone = null;
      }
    } else {
      control.invalidPhone = null;
    }
    return control;
  }

  static validateNumber(control) {
    const regex = /^[0-9]*$/;
    const value = control.value;
    if (value !== null) {
      if (!value.match(regex)) {
        control.invalidNumber = true;
      } else {
        control.invalidNumber = null;
      }
    }
    return control;
  }

  static maxLengthValidator(control, length) {
    let value = control.value ? control.value : "";
    if (value.length > length) {
      control.invalidLength = true;
    } else {
      control.invalidLength = null;
    }
    return control;
  }

  static minLengthValidator(control, length) {
    let value = control.value ? control.value : "";
    if (value.length < length) {
      control.invalidMinLength = true;
    } else {
      control.invalidMinLength = null;
    }
    return control;
  }

  static validateGST(control) {
    const regex = /^([0][1-9]|[1-2][0-9]|[3][0-5])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1})+/;
    const value = control.value;
    if (!(value === null || value === "")) {
      if (value.length !== 15) {
        control.invalidGST = true;
        return control;
      }
      const isRegexMatched = value.match(regex) ? true : false;
      if (!isRegexMatched) {
        control.invalidGST = true;
      } else {
        control.invalidGST = null;
      }
    } else {
      control.invalidGST = null;
    }
    return control;
  }

  static validatePAN(control) {
    const regex = /^([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1})+$/;
    const value = control.value;
    if (!(value === null || value === "")) {
      if (value.length !== 10) {
        control.invalidPAN = true;
        return control;
      }
      const isRegexMatched = value.match(regex) ? true : false;
      if (!isRegexMatched) {
        control.invalidPAN = true;
      } else {
        control.invalidPAN = null;
      }
    } else {
      control.invalidPAN = null;
    }
    return control;
  }

  static validateAlphabetic(control) {
    const regex = /^[a-zA-Z ]*$/;
    const value = control.value;
    if (!(value === null || value === "")) {
      const isRegexMatched = value.match(regex) ? true : false;
      if (isRegexMatched) {
        control.invalidAlphabetic = null;
      } else {
        control.invalidAlphabetic = true;
      }
    } else {
      control.invalidAlphabetic = null;
    }

    return control;
  }
}
