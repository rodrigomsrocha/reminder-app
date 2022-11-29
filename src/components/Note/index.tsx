import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MotiView } from 'moti';
import { Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../../App';

type NoteNavigationProps = StackNavigationProp<RootStackParamList, 'Notes'>;

interface NoteProps {
  note: {
    title: string;
    description: string;
  };
  index: number;
}

export function Note({ note, index }: NoteProps) {
  const navigation = useNavigation<NoteNavigationProps>();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Note', { note })}>
      <MotiView className={`px-4 py-6 bg-[#17191a] rounded-[40px] ${index !== 0 && 'mt-4'} z-30`}>
        <Text numberOfLines={1} ellipsizeMode="tail" className="text-lg text-white mb-4">
          {note.title}
        </Text>
        <Text numberOfLines={4} className="text-gray-300 text-base">
          {note.description}
        </Text>
      </MotiView>
    </TouchableWithoutFeedback>
  );
}
