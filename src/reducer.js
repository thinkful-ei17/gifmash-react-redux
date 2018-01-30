import { PICK_WINNER } from "./actions";

const initialState = [
  {
    key: 678,
    img: 'https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif',
    alt: 'Salt Bae',
    wins: 0
  },
  {
    key: 123,
    img: 'https://media.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif', 
    alt: 'Grumpy Cat',
    wins: 0
  }
];

const reducer = function(state=initialState, action) {
    if (action.type === PICK_WINNER) {
        state.map(image => {
            console.log(image);
            if (action.winner !== image.key) {
                return image
            }
            return Object.assign({}, image, {
                    wins: image.wins++
                }) 
        })
    }

    return state
};

export default reducer;