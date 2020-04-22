const initialState={
data: ["1","2"]
}

const dataBeli = (state = initialState, {type,payload}) => {
  switch(type){
    case "ADD_DATA":
      return{
        data:payload
      }
    case "DELETE_DATA":
      return{
        data:undefined
      }
      default : 
      return state
  }
}

export default dataBeli;