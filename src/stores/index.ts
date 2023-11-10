import {create} from 'zustand';
import {
  createAddToCart,
} from './locationSlice';

export const useBoundStore = create(set => ({
  ...createAddToCart(set),
}));
