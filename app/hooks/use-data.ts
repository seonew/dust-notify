import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useData = () => {
  const { data, error, isLoading } = useSWR(`/api/data`, fetcher);
  return {
    list: data?.items,
    total: data?.totalCount,
    isLoading,
    isError: error,
  };
};

export default useData;
