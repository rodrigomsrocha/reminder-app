import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalendarDay } from '../components/CalendarDay';
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
      <View className="flex-row px-2">
        <ScrollView showsHorizontalScrollIndicator={false} horizontal className="flex-row mt-8">
          {[25, 26, 27, 28, 29, 30].map((day, index) => (
            <CalendarDay key={day} index={index} day={day} isActive={day === 26} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
