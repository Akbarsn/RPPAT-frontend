const dataBeli = (state = {}, action) => {
  switch(action.type){
    case "ADD_DATA":
      return{
        data: action.payload
      }
      default : 
      return state
  }
}

export default dataBeli;