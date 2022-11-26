import { Text, TouchableWithoutFeedback, View } from 'react-native';

type Day = {
  number: number;
  weekday: string;
};

interface CalendarDayProps {
  index: number;
  day: Day;
  isActive: boolean;
  onPress: (day: number) => void;
}

export function CalendarDay({ day, index, isActive, onPress }: CalendarDayProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(day.number)}>
      <View
        className={`h-20 w-20 rounded-full ${isActive ? 'bg-indigo-500' : 'bg-[#17191a]'} items-center justify-center ${
          index && 'ml-4'
        }`}
      >
        <Text className="text-white font-bold text-lg">{day.number}</Text>
        <Text className="text-white text-sm">{day.weekday}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
