import { Text, TouchableOpacity, View } from 'react-native';
import { notes } from '../../mocks/note';
import { Note } from '../Note';

interface Note {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}

export function NotesSection() {
  const recentNotes = notes.slice(0, 2);

  return (
    <View className="p-2 mt-4">
      <View className="flex-row justify-between items-end p-4">
        <Text className="text-xl text-white">recent notes</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text className="text-gray-300">see all</Text>
        </TouchableOpacity>
      </View>
      {recentNotes.map((note) => (
        <Note key={note.id} title={note.title} description={note.description} />
      ))}
    </View>
  );
}
