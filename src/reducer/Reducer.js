export const filterReducer = (state, action) => {
	switch(action.type){
		case "search":
			return {...state, searchQuery: action.payload}
		case "category":
			return { ...state, category: action.payload }
		default:
			return state
	}
}
