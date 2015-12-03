
    try {
      Flint.packages["statuses"] = require("statuses")
    }
    catch(e) {
      console.log('Error bundling package statuses!')
      console.error(e)
      Flint.reportError(e)
    };
  