import { useNavigation } from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

export function NotesHeader() {
  const navigation = useNavigation();

  return (
    <View className="p-4 flex-row items-end mb-4">
      <TouchableWithoutFeedback onPress={navigation.goBack}>
        <Text className="-mr-5">
          <CaretLeft color="#fff" />
        </Text>
      </TouchableWithoutFeedback>
      <Text className="text-white text-lg mx-auto">your notes</Text>
    </View>
  );
}
