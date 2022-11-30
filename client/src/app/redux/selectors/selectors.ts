import { createSelector } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { GlobalState } from 'src/app/models/Country.state';


export const selectorItemsCountries = (state: AppState) => state.globalState;
export const selectorItemsAllHouses = (state: AppState) => state.globalState;
export const selectorItemsUserProfile = (state: AppState) => state.globalState;
export const selectorListBackupHouses = (state: AppState) => state.globalState;
export const selectorItemsCities = (state: AppState) => state.globalState;
export const selectorItemsPayment = (state: AppState) => state.globalState;

export const selectorListCountries = createSelector(
    selectorItemsCountries,
    (state: GlobalState) => state.countries
)

export const selectorListLoading = createSelector(
    selectorItemsCountries,
    (state: GlobalState) => state.loading
)

export const selectorListHouses = createSelector(
    selectorItemsAllHouses,
    (state: GlobalState) => state.allHouses
)

export const selectorListProfile = createSelector(
    selectorItemsUserProfile,
    (state: GlobalState) => state.userProfile
)

export const selectorListBackup = createSelector(
    selectorListBackupHouses,
    (state: GlobalState) => state.backupHouses
)

export const selectorListCities = createSelector(
    selectorItemsCities,
    (state: GlobalState) => state.cities
)

export const selectorPayment = createSelector(
  selectorItemsPayment,
  (state:GlobalState)=> state.paymentInfo
)
