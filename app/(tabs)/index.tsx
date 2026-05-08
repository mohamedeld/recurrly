import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
const HomeScreen = () => {
  return (
    <View className="flex-1 bg-background ">
      <View className="home-header">
        <View className="home-user">
          <Image source={images?.avatar} className="home-avatar" />
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <View className="home-add-icon-container">
          <Image source={icons.add} className="home-add-icon" />
        </View>
      </View>
      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>
        <View className="home-balance-row">
          <Text className="home-balance-amount">
            {formatCurrency(HOME_BALANCE.amount)}
          </Text>
          <Text className="home-balance-date">
            {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
          </Text>
        </View>
      </View>
      <View>
        <ListHeading title="Upcoming" />
        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          renderItem={({ item }) => <UpcomingSubscriptionCard data={item} />}
          keyExtractor={({ id }) => id}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="home-empty-state">No upcoming subscriptions</Text>
          }
        />
      </View>
      <View>
        <ListHeading title="All Subscriptions" />
      </View>
    </View>
  );
};

export default HomeScreen;
