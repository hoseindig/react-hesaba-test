import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, exchangeData: {}, exchangeComboSymbole: [], toggle: true };
const exchangeSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setExchangeData: (state, action) => {

            state.exchangeData = action.payload
            const listExchange = action.payload.conversion_rates
            let listSymbole = []
            for (let i in listExchange) {
                listSymbole.push(i)
            }
            state.exchangeComboSymbole = listSymbole
        },
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        incrementCustom: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        toggleCounter: (state) => {
            state.toggle = !state.toggle;
        },
    },
});

const store = configureStore({ reducer: exchangeSlice.reducer });

export const exchangeActions = exchangeSlice.actions;
export default store;