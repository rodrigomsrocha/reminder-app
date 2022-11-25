import { Image, Text, View } from 'react-native';

export function Header() {
  return (
    <View className="flex-row justify-between items-center p-4">
      <View>
        <Text className="text-gray-300 text-xl">Good evening,</Text>
        <Text className="text-white text-2xl font-bold">Rodrigo</Text>
      </View>
      <Image className="h-12 w-12 bg-white rounded-xl" source={{ uri: 'https://github.com/rodrigomsrocha.png' }} />
    </View>
  );
}
