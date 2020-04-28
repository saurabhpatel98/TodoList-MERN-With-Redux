
const iState={
    text:'',
    mywishes:[{_id:1,wish:"loading"}]
}

const reducer=(state=iState,action)=>{
   
        if(action.type==='UPDATE_IPNUT'){
            return{
            ...state,
            text:action.payload
        }
        };
 switch(action.type){
        case 'GET_WISH':return{
            ...state,
            mywishes:action.payload
        };
         case 'ADD_WISH':return{
            ...state,
            mywishes:[...state.mywishes,action.payload]
        };
        case 'DELETE_WISH':
           const newWishes = state.mywishes.filter(item=>{
                    return item._id !== action.payload._id
                })
        return{
            ...state,
            mywishes:newWishes
        };

        default:return state;

    }
}


export default reducer;