const initialState={
data: {nama:"yey"}
}

const dataBeli = (state = initialState, {type,payload}) => {
  switch(type){
    case "ADD_DATA":
      return{
        data:payload
      }
      default : 
      return payload
  }
}

export default dataBeli;