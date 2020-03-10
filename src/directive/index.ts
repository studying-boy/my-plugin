import Vue from "vue";

let enterNumber = {
  inserted: function(el) {
    el.addEventListener("keypress", e => {
      e = e || window.event;
      let charCode = typeof e.charCode == "number" ? e.charCode : e.keyCode;
      let re = /\d/;
      if (
        !re.test(String.fromCharCode(charCode)) &&
        charCode > 9 &&
        !e.ctrlKey
      ) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      }
    });
  }
};

export default {
  enterNumber
};
