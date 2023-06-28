import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useMyData = (sidoName: string, stationName: string) => {
  const { data, error, isLoading } = useSWR(
    `/api/data/${sidoName}/${stationName}`,
    fetcher
  );

  let result: [] | undefined = [];
  if (data && data?.items.length > 0) {
    result = data?.items.map((item) => {
      return { ...item, sidoName, stationName };
    });
  }

  if (result?.length === 0) {
    result = undefined;
  }

  return {
    list: result,
    isLoading,
    isError: error,
  };
};

export default useMyData;
