export default function site(state = {
  page: null,
  mounted: false
}, action) {
  switch (action.type) {
    case 'SITE_MOUNTED':
      return Object.assign({}, state, {
        mounted: true
      });
    case 'PAGE_TRANSITION':
      return Object.assign({}, state, {
        page: action.page
      });
    case 'TOGGLE_MENU':
      return Object.assign({}, state, {
        open: !state.open
      });
    default:
      return state;
  }
}