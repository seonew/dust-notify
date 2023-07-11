import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useMyData = (sidoName: string, stationName: string) => {
  const { data, error, isLoading } = useSWR(
    `/api/data/${sidoName}/${stationName}`,
    fetcher
  );

  const nextList =
    data?.items?.length > 0
      ? data.items.map((item) => ({ ...item, sidoName, stationName }))
      : undefined;

  return {
    list: nextList,
    isLoading,
    isError: error,
  };
};

export default useMyData;
