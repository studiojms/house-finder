import create from 'zustand';

export const useHousesStore = create(set => ({
  offset: 0,
  setOffset: offset => set({ offset }),

  loadingHouseList: true,
  setLoadingHouseList: loadingHouseList => set({ loadingHouseList }),

  housesList: [],
  setHouseList: housesList => set({ housesList }),

  selectedHouse: null,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),

  query: null,
  setQuery: query => set({ query }),
}));
