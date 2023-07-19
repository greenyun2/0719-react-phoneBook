let initialState = {
  contact: [],
  keyword: "",
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action
  console.log(payload.name, "페이로드네임?")
  switch (type) {
    case "ADD_CONTACT":
        state.contact.push({name: payload.name, phoneNumber: payload.phoneNumber});
        break;
      case "SEARCH_BY_USERNAME":
        state.keyword = payload.keyword
        break;
  }
  return {...state}
}

export default reducer;