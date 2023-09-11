import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ScreenLogin, ScreenMapa, ScreenSuasDenuncias, ScreenCadastrar} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
type TabParamList ={
  Login: undefined
  Mapa: undefined
  Cadastrar: undefined
  SuasDenuncias: undefined
  CadastroDenuncias: undefined
  Camera: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Login'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
export function TabNavigation() {
  const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarInactiveBackgroundColor:colors.third,
        tabBarActiveBackgroundColor: colors.primary, 
        tabBarActiveTintColor: colors.white
      }}
    >
      <Tab.Screen name="Mapa" component={ScreenMapa}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="map-marked-alt" size={24} color="white" />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen name="SuasDenuncias" component={ScreenSuasDenuncias} 
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="journal-whills" size={24} color="white" />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen name="Login" component={ScreenLogin} 
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.white} size={24} />
          ),
          headerShown: false, 
        }}
      />
       
      
    
    </Tab.Navigator>
  );
}