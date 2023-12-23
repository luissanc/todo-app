import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'All',
    color: []
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    
    reducers:{
        statusFilterChanged: (state, action) =>{
            state.status = action.payload
        },
        colorFilterChanged: (state, action) => {
            const color = action.payload.color
            const changeType = action.payload.changeType //add, remove changeType
            let i = 0
            let colorIsInFilter = false
            while(i< state.color.length){
                if(state.color[i] === color){
                    colorIsInFilter = true
                    if(changeType === 'remove'){
                        state.color.splice(i,1)
                    }
                    else{
                        i++
                    }
                }
                else{
                    i++
                }
            }
            if(!colorIsInFilter && changeType === 'add'){
                state.color.push(color)
            }
        }
    }
});

export const { statusFilterChanged, colorFilterChanged } = filtersSlice.actions

export default filtersSlice.reducer
