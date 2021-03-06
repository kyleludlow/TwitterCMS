let update = require('react-addons-update');

function bandReducer(state = [], action)  {
  let newState = null;
  switch (action.type) {
    case 'BAND_RECEIVED':
      newState = update(state, {
        $set: action.bands
      })
      break;
    default:
  }
  return newState || state;
}

module.exports = {
  bands: bandReducer
}
