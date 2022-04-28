
export const cartReducer =(state, action) => {
    switch (action.type){
      case "ADD_TO_CART":
          return{...state, cart:[...state.cart, {...action.payload, qty: 1}]};
          case "REMOVE_FROM_CART":
            return{
                ...state, 
                cart: state.cart.filter((c)=> c.id !==action.payload.id),
            };
            case'CHANGE_CART_QYT':
            return {
                ...state,
                 cart: state.cart.filter((c)=>
                  c.id ===action.payload.id?(c.qty=action.payload.qty) : c.qty
                  ),
                }

        
        default:
            return state;
    }
};

export const productReducer= (state, action) => {
    switch (action.type){
              case 'SORT_BY_PRICE':
                    return {
                          ...state,
                           sort: action.payload
                            };

               case 'filter_BY_STOCK':
                    return {
                        ...state,
                        byStock: !state.byStock
                        };
                case 'SORT_BY_DELIVERY':
                            return {
                                ...state,
                                byFastDelievery: !state.byFastDelievery
                                };
                case 'SORT_BY_RATING':
                                    return {
                                        ...state,
                                        byRating: action.payload
                                        };
                case 'SORT_BY_SEARCH':
                                  return {
                                        ...state,
                                        searchQuery: action.payload
                                        };
                case "CLEAR FILTERS":
                                 return {
                                 byStock: false,
                                 byFastDelievery: false,
                                 byRating:0,
                                 searchQuery: "", 
                                };



        default:
            return state
    }

};
