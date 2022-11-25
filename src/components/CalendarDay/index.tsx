import { Text, View } from 'react-native';

interface CalendarDayProps {
  index: number;
  day: number;
  isActive: boolean;
}

export function CalendarDay({ day, index, isActive }: CalendarDayProps) {
  return (
    <View
      className={`h-20 w-20 rounded-full ${isActive ? 'bg-indigo-500' : 'bg-[#17191a]'} items-center justify-center ${
        index && 'ml-4'
      }`}
    >
      <Text className="text-white font-bold text-lg">{day}</Text>
      <Text className="text-white text-sm">FRI</Text>
    </View>
  );
}
