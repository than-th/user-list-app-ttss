import { useEffect, useState } from 'react';

import { User } from '../models/user';
import { API_ENDPOINT } from '../services/ApiEndpoint';
import { get } from '../services/ApiService';

const useUserListViewModel = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    fetchUsers(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchUsers = async (pageNo: number) => {
    if (loading || !hasMoreData) {
      return;
    }
    setLoading(true);
    try {
      const response = await get<User[]>(`${API_ENDPOINT.users}?_page=${pageNo}&_limit=5`);
      const data: User[] = response.data;
      console.log(data.length);
      if (data.length === 0) {
        setHasMoreData(false);
      }else{
        setUsers(prevUsers => pageNo === 1 ? data : [...prevUsers, ...data]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setHasMoreData(true);
    setPage(1);
    await fetchUsers(1);
    setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (!loading && hasMoreData) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return {
    users,
    loading,
    refreshing,
    handleRefresh,
    handleLoadMore,
  };
};

export default useUserListViewModel;
