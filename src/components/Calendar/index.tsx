import { ScrollView, View } from 'react-native';
import { CalendarDay } from '../CalendarDay';

interface CalendarProps {
  selectedDay: number;
  onPress: (day: number) => void;
}

export function Calendar({ onPress, selectedDay }: CalendarProps) {
  const today = new Date();
  const week = new Array(7).fill(null).map((_, index) => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const nextDay = new Date().setDate(today.getDate() + index);
    return {
      number: new Date(nextDay).getDate(),
      weekday: days[new Date(nextDay).getDay()],
    };
  });

  return (
    <View className="flex-row px-2">
      <ScrollView showsHorizontalScrollIndicator={false} horizontal className="flex-row mt-8">
        {week.map((day, index) => (
          <CalendarDay
            key={day.number}
            index={index}
            day={day}
            onPress={onPress}
            isActive={selectedDay === day.number}
          />
        ))}
      </ScrollView>
    </View>
  );
}
