import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { notes } from '../../mocks/note';
import { Note } from '../Note';

export function NotesSection() {
  const recentNotes = notes.slice(0, 2);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View className="p-2 mt-4">
      <View className="flex-row justify-between items-end p-4 mb-2">
        <Text className="text-xl text-white">recent notes</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Notes')}>
          <Text className="text-gray-300">see all</Text>
        </TouchableOpacity>
      </View>
      {recentNotes.map((note, index) => (
        <Note key={note.id} note={note} index={index} />
      ))}
    </View>
  );
}
