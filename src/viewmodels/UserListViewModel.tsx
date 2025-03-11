import { useEffect, useState } from 'react';

import { User } from '../models/user';
import { API_ENDPOINT } from '../services/ApiEndpoint';
import { get } from '../services/ApiService';

const useUserListViewModel = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchUsers(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchUsers = async (pageNo: number, isRefreshing = false) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await get<User[]>(`${API_ENDPOINT.users}?_page=${pageNo}&_limit=5`);
      const data: User[] = response.data;
      setUsers(prevUsers => isRefreshing ? data : [...prevUsers, ...data]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setUsers([]);
    await fetchUsers(1, true);
    setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (!loading) {
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
