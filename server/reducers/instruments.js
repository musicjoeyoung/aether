const { pickBy } = require('lodash');
let newState;

/*----------  INITIAL STATE  ----------*/
const initialState = [];

/*----------  ACTION TYPES  ----------*/
const RECEIVE_ALL_INSTRUMENTS = 'RECEIVE_ALL_INSTRUMENTS';
const RECEIVE_INSTRUMENT = 'RECEIVE_INSTRUMENT';
const DRAG_INSTRUMENT = 'DRAG_INSTRUMENT';
const REMOVE_INSTRUMENT = 'REMOVE_INSTRUMENT';

/*----------  ACTION CREATORS  ----------*/
const receiveAllInstruments = (instruments) => {
  return {
    type: RECEIVE_ALL_INSTRUMENTS,
    instruments,
  };
};

const receiveInstrument = (data) => {
  return {
    type: RECEIVE_INSTRUMENT,
    instrument: {
      id: data.id,
      position: data.position,
      soundType: data.soundType,
      soundIndex: data.soundIndex,
    },
  };
};

const dragInstrument = (id, position, soundType, soundIndex) => ({
  type: DRAG_INSTRUMENT,
  instrument: { id, position, soundType, soundIndex },
});

const removeInstrument = (id) => ({
  type: REMOVE_INSTRUMENT,
  id,
});

/*----------  THUNK CREATORS  ----------*/

/*----------  REDUCER  ----------*/

const immutable = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_INSTRUMENTS:
      return action.instruments;
    case RECEIVE_INSTRUMENT:
      return [...state, action.instrument];
    case DRAG_INSTRUMENT:
      const newState = state.map((instrument) => {
        if (instrument.id === action.instrument.id) {
          return {
            id: action.instrument.id,
            position: action.instrument.position,
            soundType: action.instrument.soundType,
            soundIndex: action.instrument.soundIndex,
          };
        } else {
          return instrument;
        }
      });
      return newState;
    case REMOVE_INSTRUMENT:
      return state.filter((instrument) => instrument.id !== action.id);
    default:
      return state;
  }
};

const mutable = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_INSTRUMENTS:
      return action.instruments;
    case RECEIVE_INSTRUMENT:
      return [...state, action.instrument];
    case DRAG_INSTRUMENT:
      const newState = state.map((instrument) => {
        if (instrument.id === action.instrument.id) {
          return {
            id: action.instrument.id,
            position: action.instrument.position,
            soundType: action.instrument.soundType,
            soundIndex: action.instrument.soundIndex,
          };
        } else {
          return instrument;
        }
      });
      return newState;
    case REMOVE_INSTRUMENT:
      return state.filter((instrument) => instrument.id !== action.id);
    default:
      return state;
  }
};

/* const mutable = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_INSTRUMENTS:
      return action.instruments;
    case RECEIVE_INSTRUMENT:
      return [...state, action.instrument];
    case DRAG_INSTRUMENT:
      return state.map((instrument) => {
        if (instrument.id === action.instrument.id) {
          return {
            id: action.instrument.id,
            position: Object.entries(action.instrument.position),
          };
        } else {
          return instrument;
        }
      });
    default:
      return state;
  }
}; */

const chooseReducer = (reducerMode) => {
  switch (reducerMode) {
    case 'mutable':
      return mutable;
    case 'immutable':
      return immutable;
    default:
      return mutable;
  }
};

const reducer = chooseReducer('immutable');

module.exports = {
  reducer,
  receiveAllInstruments,
  receiveInstrument,
  dragInstrument,
  removeInstrument,
};
