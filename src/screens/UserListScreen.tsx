import React from 'react';
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native';
import tw from 'twrnc';

import Icon from '@react-native-vector-icons/ionicons';

import TopNavbar from '../components/TopNavbar';
import { User } from '../models/user';
import { Colors } from '../shared/style/Colors';
import { sharedStyle } from '../shared/style/SharedStyle';
import useUserListViewModel from '../viewmodels/UserListViewModel';

const UserListScreen: React.FC = () => {
  const {users, loading, refreshing, handleLoadMore, handleRefresh} =
    useUserListViewModel();

  const renderCard = (item: User) => (
    <View
      style={tw`mx-6 my-3 h-60 bg-white rounded rounded-lg shadow-md flex-row overflow-hidden relative`}>
      <View
        style={tw`absolute top-0 left-0 w-[4%] h-full bg-[${Colors.primary}]`}
      />
      <View style={tw`flex-1 p-6 gap-4 justify-center`}>
        <Text style={[tw`text-center text-xl`, sharedStyle.fontBold]}>
          {item.name}
        </Text>
        <View style={tw`border border-[${Colors.primary}] w-full`} />
        <View style={tw`flex-row items-center gap-2`}>
          <Icon
            name="mail"
            size={16}
            color={'white'}
            style={tw`bg-[${Colors.primary}] p-1 rounded-full shadow-md`}
          />
          <Text>{item.email}</Text>
        </View>
        <View style={tw`flex-row items-center gap-2`}>
          <Icon
            name="call"
            size={16}
            color={'white'}
            style={tw`bg-[${Colors.primary}] p-1 rounded-full shadow-md`}
          />
          <Text>{item.phone}</Text>
        </View>
        <View style={tw`flex-row items-center gap-2`}>
          <Icon
            name="location"
            size={16}
            color={'white'}
            style={tw`bg-[${Colors.primary}] p-1 rounded-full shadow-md`}
          />
          <Text style={tw`flex-wrap max-w-[300px]`}>
            {item.address.suite +
              ' ' +
              item.address.street +
              ', ' +
              item.address.city +
              ', ' +
              item.address.zipcode}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1`}>
      <TopNavbar title={'รายชื่อ'} />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderCard(item)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : null
        }
      />
    </View>
  );
};

export default UserListScreen;
