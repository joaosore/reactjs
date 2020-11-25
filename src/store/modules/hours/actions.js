export function StoreHours(hours) {
  return {
    type: '@HOURS/STORE',
    hours,
  };
}

export function UpdateHours(hours) {
  return {
    type: '@HOURS/UPDATE',
    hours,
  };
}
