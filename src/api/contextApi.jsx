import { createContext, useEffect, useReducer, useState } from 'react';

export const EcommerceContext = createContext(null);

const initialState =[];
const reducer=(state, action)=>{
    switch (action.type){
        case "addToCart":{
            return [...state, {...action.payload, QTY: 1}]
        }
        case "increase QTY":{
            const item = state.map((e)=>{
                if(e.id === action.payload.id){
                    e.QTY += 1;
                    return e
                }else{
                    return e
                }
            })
            return item;
        }
        case "decrease QTY":{
            const checkItem = state.findIndex((e)=> e.id === action.payload.id)
            if(state[checkItem].QTY === 1){
                const item = state.filter((e)=> e.id !== action.payload.id);
                return item;
            }else{
                const item = state.map((e)=>{
                    if(e.id === action.payload.id){
                        e.QTY -= 1;
                        return e
                    }else{
                        return e
                    }
                })
                return item;
            }
            
        }
        default:{
            throw new Error()
        }
    }
}

const EcommerceProvider=({children})=>{
    const [cart, dispatch] = useReducer(reducer, initialState);
    const [total, setTotal] = useState(0)
    useEffect(()=>{
      const total= cart.reduce((a,e)=> e.price + a ,0) 
      setTotal(total) 
    },[cart])
    return(
            <EcommerceContext.Provider value={{cart, dispatch, total}}>
                {children}
            </EcommerceContext.Provider>
    )
}

export default EcommerceProvider