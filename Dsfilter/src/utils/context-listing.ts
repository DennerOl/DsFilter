import { createContext } from 'react';

// tipo do contexto
export type ContextListingCountType = {
  contextListingCount: number;
  setContextListingCount: (contextListingCount: number) => void;

}

//crio o contexto
export const ContextListingCount = createContext<ContextListingCountType>({
  contextListingCount: 0,
  setContextListingCount: () => { }
})