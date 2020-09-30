import React from "react";

function If() {
    return ( if (currDate >= 1 && currDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'Green';
  }else if (currDate>=12 && currDate < 19) {
    greeting = 'Good Afternoon';  
    cssStyle.color = 'Orange';
  }else {
    greeting = 'Good Night';
    cssStyle.color = 'Black';
  }
    );
}

export default If;