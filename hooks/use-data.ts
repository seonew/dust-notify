import { useSelector } from "react-redux";
import useSWR from "swr";
import { RootState } from "@/lib/store";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useData = (sidoName: string) => {
  const { data, error, isLoading } = useSWR(`/api/data/${sidoName}`, fetcher);
  const favorites = useSelector((state: RootState) => state.favorite.items);

  const fetchedList = data?.items;
  const nextList =
    fetchedList?.length > 0
      ? fetchedList.map((current) => {
          const foundItem = favorites.find(
            (favorite) => current.stationName === favorite.stationName
          );
          if (foundItem) {
            return { ...current, isFavorite: true };
          }

          return current;
        })
      : fetchedList;

  return {
    list: nextList,
    total: data?.totalCount,
    isLoading,
    isError: error,
  };
};

export default useData;
