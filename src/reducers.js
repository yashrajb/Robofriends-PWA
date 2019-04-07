const initialState = {
   searchfield:''
}

export const search = (state=initialState,action={}) => {
     switch(action.type){
         case "CHANGE_SEARCH_FIELD":
            return {...state,searchfield:action.payload}
         default:
           return state;
     }
}

const requestState = {
   error:'',
   robots:[],
   pending:false
}

export const request = (state=requestState,action={}) => {
     switch(action.type){
        case "REQUEST_PENDING":
          return {
             ...state,
             pending:action.isPending
          }
         case "REQUEST_SUCCESS":
         return {
            ...state,
            robots:action.robots,
            pending:action.isPending
         }
         case "REQUEST_FAILED":
         return {
            ...state,
            error:action.error,
            pending:action.isPending
         }
          default:
            return state
     }
} 