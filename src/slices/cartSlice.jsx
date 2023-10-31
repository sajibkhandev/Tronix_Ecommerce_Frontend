import { createSlice, current } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartArray: [],
    cartOpen:""
    
  },
  reducers: {
    addToCart: (state,action) => {
        if(state.cartArray.length>0){
            let arr=[]
            state.cartArray.map(item=>{
                if(item.title==action.payload.title){
                    item.quantity=item.quantity+1
                    arr.push(item.title)
                }
            })
            if(arr.indexOf(action.payload.title) ==-1){
                state.cartArray.push(action.payload)
            }

        }else{

            state.cartArray.push(action.payload)
        }
       
       
        
     
    },
    increment:(state,action)=>{
        state.cartArray.map(item=>{
            if(item.title==action.payload.title){
                item.quantity=item.quantity+1
                
            }
        })

    },
    decrement:(state,action)=>{
        state.cartArray.map(item=>{
            if(item.title==action.payload.title){
                if(item.quantity>1){
                    item.quantity=item.quantity-1
                }
                
            }
        })

    },
    remove:(state,action)=>{
        state.cartArray.map((item,index)=>{
            if(item.title==action.payload.title){
                state.cartArray.splice(index,1)
            }
        })

    },
    cartOpen:(state,action)=>{
        state.cartOpen=action.payload
        console.log(state.cartOpen);
    },
  },
})


export const { addToCart,increment,decrement,remove,cartOpen } = cartSlice.actions

export default cartSlice.reducer