import { Text, View } from 'react-native';

interface CalendarDayProps {
  index: number;
  day: number;
}

export function CalendarDay({ day, index }: CalendarDayProps) {
  return (
    <View className={`h-20 w-20 rounded-full bg-indigo-600 items-center justify-center ${index && 'ml-4'}`}>
      <Text className="text-white font-bold text-lg">{day}</Text>
      <Text className="text-white text-sm">FRI</Text>
    </View>
  );
}
