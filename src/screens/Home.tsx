import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from '../components/Calendar';
import { Header } from '../components/Header/Index';

export function Home() {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());

  const updateSelectedDay = (day: number) => {
    setSelectedDay(day);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#0f0f0f] flex-1">
      <Header />
      <Calendar selectedDay={selectedDay} onPress={updateSelectedDay} />
    </SafeAreaView>
  );
}
