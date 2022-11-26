import { Text, View } from 'react-native';

interface NoteProps {
  title: string;
  description: string;
}

export function Note({ title, description }: NoteProps) {
  return (
    <View className="px-4 py-6 bg-[#17191a] rounded-[40px] mt-2">
      <Text className="text-lg text-white mb-4">{title}</Text>
      <Text numberOfLines={2} className="text-gray-300 text-base">
        {description}
      </Text>
    </View>
  );
}
