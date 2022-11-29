import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { RootStackParamList } from '../../../App';
import { NoteType } from '../../types';

type NoteNavigationProps = StackNavigationProp<RootStackParamList, 'Notes'>;

interface NoteProps {
  note: NoteType;
  index: number;
}

export function Note({ note, index }: NoteProps) {
  const navigation = useNavigation<NoteNavigationProps>();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Note', { note })}>
      <View className={`px-4 py-6 bg-[#17191a] rounded-[40px] ${index !== 0 && 'mt-4'} z-30`}>
        <SharedElement id={`${note.id}${note.title}.title`}>
          <Text numberOfLines={1} ellipsizeMode="tail" className="text-lg text-white mb-4">
            {note.title}
          </Text>
        </SharedElement>
        <Text numberOfLines={4} className="text-gray-300 text-base">
          {note.description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
