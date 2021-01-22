  //Date Code for Particular Format
exports.getDate  = () => {

    let today = new Date();
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    return today.toLocaleDateString('en-US', options);
  };

  
exports.getDay = () => {

    let today = new Date();
    let options = {
      weekday: 'long',
    };

    return today.toLocaleDateString('en-US', options);


  };