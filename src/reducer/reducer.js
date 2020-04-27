const initialState={
data: [],
bankacc:[{index:0, name:"BCA"}, {index:0, name:"BNI"}],
bankdetail:[{name: "", number: ""}, {name:""}, {number:""}],
formValue:{}                 
}

const dataBeli = (state = initialState, {type,payload, acc, detail}) => {
  switch(type){
    case "ADD_DATA":
      return{
        data:payload,
        bankacc:acc,
        bankdetail:detail
      }
    case "ADD_FORM_VALUE":
      return{
        formValue:payload
      }
    case "DELETE_DATA":
      return{
        data:initialState.data,
        bankacc:initialState.bankacc,
        bankdetail:initialState.bankdetail,
        formValue:initialState.formValue
      }
      default : 
      return state
  }
}

export default dataBeli;