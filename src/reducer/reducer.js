const initialState={
data: ["1","2"],
bankacc:[{index:0, name:"ok"}, {index:0, name:"noo"}],
bankdetail:["ok","yaa"]
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
      case "ADD_BANK_ACC":
      return{
        bankacc:payload
      }
      case "ADD_BANK_DETAIL":
      return{
        bankdetail:payload
      }
      default : 
      return state
  }
}

export default dataBeli;