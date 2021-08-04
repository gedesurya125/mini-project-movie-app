import * as type from '../actions/actionTypes';



const initialState = {
  "page": "1",
  "total_page": 4,
  "total": 10,
  "data": [
    {
      "movieInfo": {
        "rating": 7
      },
      "category": "Movie",
      "genres": [
        "Mystery"
      ],
      "_id": "61091ef3c8b43f8c9efc288c",
      "title": "iste et ut",
      "thumbnail": "http://placeimg.com/640/480/city"
    }
  ]
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_MOVIES: return action.payload; //SET_MOVIES payload: [{},{},{}]
    case type.REQ_FAILED: return action.payload;
    default: return state
  }
}

export default moviesReducer