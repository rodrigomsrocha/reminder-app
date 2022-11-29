import { StackScreenProps } from '@react-navigation/stack';
import { MotiText, MotiView } from 'moti';
import { X } from 'phosphor-react-native';
import { ScrollView, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';
import { RootStackParamList } from '../../App';

export function Note({ route, navigation }: StackScreenProps<RootStackParamList, 'Note'>) {
  const { note } = route.params;

  return (
    <ScrollView className="flex-1 bg-[#0f0f0f]">
      <SafeAreaView className="p-6">
        <View>
          <View className="flex-row items-end justify-between">
            <SharedElement id={`${note.id}${note.title}.title`}>
              <Text className="text-lg text-white font-bold leading-none">{note.title}</Text>
            </SharedElement>
            <TouchableWithoutFeedback onPress={navigation.goBack}>
              <MotiView
                from={{ rotate: '0deg', opacity: 0 }}
                animate={{ rotate: '90deg', opacity: 1 }}
                transition={{ type: 'timing', duration: 250, delay: 500 }}
              >
                <X color="#fff" />
              </MotiView>
            </TouchableWithoutFeedback>
          </View>
          <MotiText
            from={{ opacity: 0, translateX: -200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1000, delay: 500 }}
            className="text-base text-white mt-6"
          >
            {note.description}
          </MotiText>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
