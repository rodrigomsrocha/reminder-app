import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../components/Header/Index';

export function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#0f0f0f] flex-1">
      <Header />
    </SafeAreaView>
  );
}
