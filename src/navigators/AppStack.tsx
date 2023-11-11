import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationRoutes from './NavigationRoutes';
// import CustomHeader from '@Component/CustomHeader/CustomHeader';
import AppHeader from '../Header/AppHeader';
import React from 'react';

const Stack = createNativeStackNavigator();

type AppStackProps = {
  initialRouteName: string;
};

export default function AppStack(props: AppStackProps) {
  const { initialRouteName } = props;
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        gestureEnabled: false,
        animation: 'slide_from_right',
        header: props => {
        //   let state = props.navigation.getState();
        //   let routeIndex = state?.routes[state?.index]?.state?.index;
        //   let routeName = state.routes[state.index].name;
          return (
            <AppHeader
            //   {...props}
            //   routeName={routeName}
            //   routeIndex={routeIndex}
            />
          );
        },
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}>
      <Stack.Screen
        options={{ title: "HOME",
        // header: () => <CustomHeader />,
         }}
        name={NavigationRoutes.APP_STACK.HOME}
        getComponent={() =>
          require('../Screens/Home/Home').default
        }
      />
      {/* <Stack.Screen
        options={{ title: t('Rides') }}
        name={NavigationRoutes.APP_STACK.RIDES}
        getComponent={() =>
          require('@Container/AppContainer/Ride/Rides').default
        }
      />
      <Stack.Screen
        options={{ title: t('ChatScreen') }}
        name={NavigationRoutes.APP_STACK.CHAT_SCREEN}
        getComponent={() =>
          require('@Container/AppContainer/SupportChat/ChatScreen').default
        }
      />
      <Stack.Screen
        options={{ title: t('DriverChat') }}
        name={NavigationRoutes.APP_STACK.DRIVER_CHAT}
        getComponent={() =>
          require('@Container/AppContainer/SupportChat/ChatScreen').default
        }
      />

      <Stack.Screen
        options={{ title: t('BookingHistoryDetails') }}
        name={NavigationRoutes.APP_STACK.TRIP_DETAILS}
        getComponent={() =>
          require('@Container/AppContainer/TripDetails/TripDetails').default
        }
      />
      <Stack.Screen
        options={{ title: t('Profile') }}
        name={NavigationRoutes.APP_STACK.PROFILE}
        getComponent={() =>
          require('@Container/AppContainer/Profile/Profile').default
        }
      />

      <Stack.Screen
        options={{ title: t('Booking') }}
        name={NavigationRoutes.APP_STACK.BOOKING_SCREEN}
        getComponent={() =>
          require('@Container/AppContainer/Booking/BookingScreen').default
        }
      />

      <Stack.Screen
        options={{ title: t('EARNINGS') }}
        name={NavigationRoutes.APP_STACK.EARNINGS}
        getComponent={() =>
          require('@Container/AppContainer/Earnings/Earnings').default
        }
      />
      <Stack.Screen
        options={{ title: t('Notifications') }}
        name={NavigationRoutes.APP_STACK.NOTIFICATION}
        getComponent={() =>
          require('@Container/AppContainer/Notifications/NotificationsScreen')
            .default
        }
      />
      <Stack.Screen
        options={{ title: t('StripeConnect') }}
        name={NavigationRoutes.APP_STACK.STRIPE_CONNECT}
        getComponent={() =>
          require('@Container/AppContainer/StripeConnect/StripeConnect').default
        }
      />
      <Stack.Screen
        options={{ title: t('StripeConnectId') , headerShown: true}}
        name={NavigationRoutes.APP_STACK.STRIPE_CONNECT_ID}
        getComponent={() =>
          require('@Container/AppContainer/StripeConnect/StripeConnectId').default
        }
      />
      <Stack.Screen
        options={{ title: t('BankingInfo') }}
        name={NavigationRoutes.APP_STACK.BANKING_INFO}
        getComponent={() =>
          require('@Container/AppContainer/BankingInfo/BankingInfo').default
        }
      />
         <Stack.Screen
        options={{ title: t('ServiceTypes') }}
        name={NavigationRoutes.APP_STACK.SERVICE_TYPES}
        getComponent={() =>
          require('@Container/AppContainer/ServiceTypes/ServiceTypes').default
        }
      />
         <Stack.Screen
        options={{ title: t('Documents') }}
        name={NavigationRoutes.APP_STACK.DOCUMENTS}
        getComponent={() =>
          require('@Container/AppContainer/Documents/Documents').default
        }
      /> */}
    </Stack.Navigator>
  );
}
