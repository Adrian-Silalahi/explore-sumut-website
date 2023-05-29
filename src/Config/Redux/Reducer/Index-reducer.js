const initialState = {
    data1: [],
    data2: []
  }
  
  const Reducer = (state = initialState, action) => {
    if (action.type === 'SET_DATA1') {
      return {
        ...state,
        data1: action.value
      }
    }
    if (action.type === 'SET_DATA2') {
      return {
        ...state,
        data2: action.value
      }
    }
    return state;
  }

export default Reducer;