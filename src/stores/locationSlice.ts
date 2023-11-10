interface LocationSlice {
  addToCartZustand: any;
}
const initialLocationState: LocationSlice = {
  addToCartZustand : null
};

export const createAddToCart = (set: any) => ({
  ...initialLocationState,
  setAddToCartZustand: (data: any) =>
    set(state => ({
      ...state,
      addToCartZustand: data,
    })),
});