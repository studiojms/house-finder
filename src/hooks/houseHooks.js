import { listHouses } from '../services/calls';
import { useHousesStore } from '../stores/houses';

export const useHousesHook = () => {
  const {
    housesList,
    setHouseList,
    offset,
    setOffset,
    setLoadingHouseList,
    query,
    setQuery,
  } = useHousesStore();

  const onGetHouses = async () => {
    setLoadingHouseList(true);
    try {
      const result = await listHouses({ ...query, offset });

      if (offset > 0) {
        setHouseList(
          result?.properties ? [...housesList, result.properties] : housesList,
        );
      } else {
        setHouseList(result?.properties || housesList);
      }

      setOffset(offset + 15);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingHouseList(false);
    }
  };

  const onFilterHouseList = async filterQuery => {
    try {
      setLoadingHouseList(true);

      if (filterQuery !== query) {
        setHouseList([]);
        setOffset(0);
      }

      setQuery(filterQuery);
      const result = await listHouses({ query: filterQuery, offset });
      setHouseList(result?.properties || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingHouseList(false);
    }
  };

  return { onGetHouses, onFilterHouseList };
};
