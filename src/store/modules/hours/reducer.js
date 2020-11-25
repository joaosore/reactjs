import produce from 'immer';

export default function hours(state = [], action) {
  switch (action.type) {
    case '@HOURS/STORE':
      return state;
    case '@HOURS/UPDATE':
      return produce(state, (draft) => {
        draft.hours = action.hours.hours;
      });
    default:
      return state;
  }
}
