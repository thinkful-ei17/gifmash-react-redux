import { PICK_WINNER } from "./actions";

const generateTwoDifferentRandomNumbers = function() {
    const randomA = Math.floor(Math.random() * 6);
    do {
        var randomB = Math.floor(Math.random() * 6);
    } while (randomB === randomA);
    return [ randomA, randomB ];
}

const createInitialState = function(){
    const [ randomA, randomB ] = generateTwoDifferentRandomNumbers();
    return {
        images: [
      {
        key: 0,
        img: 'https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif',
        alt: 'Salt Bae',
        wins: 0
      },
      {
        key: 1,
        img: 'https://media.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif', 
        alt: 'Grumpy Cat',
        wins: 0
      },
      {
        key: 2,
        img: 'https://media.giphy.com/media/SWN6nYgyodVKw/giphy.gif', 
        alt: 'Breakfast Club Fist in the Air',
        wins: 0
      },
      {
        key: 3,
        img: 'https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif', 
        alt: 'Jonah Hill is Excited',
        wins: 0
      },
      {
        key: 4,
        img: 'https://media.giphy.com/media/uSYQsJQWEv6O4/giphy.gif', 
        alt: 'Panda Dancing',
        wins: 0
      },
      {
        key: 5,
        img: 'https://media.giphy.com/media/5MTo5bU7yu68E/giphy.gif',
        alt: 'Boxer in Booties',
        wins: 0
      }],
      imageA: randomA,
      imageB: randomB
    }
}

const reducer = function(state=createInitialState(), action) {
    if (action.type === PICK_WINNER) {
        const updatedImages = state.images.map(image => {
            if (action.winner !== image.key) {
                return image
            }
            return Object.assign({}, image, {
                    wins: image.wins + 1
                }) 
        })
        const [ randomA, randomB ] = generateTwoDifferentRandomNumbers();

        return Object.assign({}, state, {
            images: updatedImages,
            imageA: randomA,
            imageB: randomB
        })
    }

    return state
};

export default reducer;