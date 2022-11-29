import { StackScreenProps } from '@react-navigation/stack';
import { X } from 'phosphor-react-native';
import { ScrollView, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../App';

export function Note({ route, navigation }: StackScreenProps<RootStackParamList, 'Note'>) {
  const { note } = route.params;

  return (
    <ScrollView className="flex-1 bg-[#0f0f0f]">
      <SafeAreaView className="p-6">
        <View className="flex-row items-end justify-between mb-6">
          <Text className="text-xl text-white font-bold leading-none">{note.title}</Text>
          <TouchableWithoutFeedback onPress={navigation.goBack}>
            <X color="#fff" />
          </TouchableWithoutFeedback>
        </View>
        <Text className="text-base text-white">{note.description}</Text>
      </SafeAreaView>
    </ScrollView>
  );
}
