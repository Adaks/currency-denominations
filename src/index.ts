// Export types
export type { CurrencyDenomination, CurrencyDenominations, CurrencyCode } from './types';

// Export data
export { currencyDenominations } from './data';

// Export API functions
export {
  getDenominations,
  getNotes,
  getCoins,
  getSupportedCurrencies,
  hasDenominations,
  getAllDenominations,
  getCurrenciesWithNotes,
  getCurrenciesWithCoins,
  getHighestNote,
  getLowestNote,
  getHighestCoin,
  getLowestCoin,
  upsertDenominations,
  updateNotes,
  updateCoins,
  addNote,
  addCoin,
  removeCurrency
} from './api';