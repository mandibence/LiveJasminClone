import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define the type for your object array
interface Item {
    id: number;
    name: string;
    picture: string
}

// Define the type for initial state
interface InitialState {
    items: Item[];
}

// Define the initial state using that type
const initialState: InitialState = {
    items: [{ id: 1, name: 'Alice', picture: process.env.PUBLIC_URL + '/profilePictures/profile1.jpg' },
        { id: 2, name: 'Becky', picture: process.env.PUBLIC_URL + '/profilePictures/profile2.jpg' },
        { id: 3, name: 'Tiffany', picture: process.env.PUBLIC_URL + '/profilePictures/profile3.jpg' },
        { id: 4, name: 'Lena', picture: process.env.PUBLIC_URL + '/profilePictures/profile4.jpg' }],
};

export const profileListSlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        // Add reducer functions here
        /*
        addItem(state, action: PayloadAction<Item>) {
            state.items.push(action.payload);
        },
        */
    },
})
        /*
        export const {} = profileListSlice.actions
        */
// Other code such as selectors can use the imported `RootState` type

export const selectCount = (state: RootState) => state.mySlice.items

export default profileListSlice.reducer