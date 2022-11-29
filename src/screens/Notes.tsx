import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Note } from '../components/Note';
import { NotesHeader } from '../components/NotesHeader';
import { notes } from '../mocks/note';
import { NoteType } from '../types';

export function Notes() {
  const formattedNotes = notes.reduce(
    (acc, note, index) => {
      if (index % 2 === 0) {
        acc.left.push(note);
        return acc;
      }
      if (index % 2 !== 0) {
        acc.right.push(note);
        return acc;
      }
      return acc;
    },
    {
      right: [] as NoteType[],
      left: [] as NoteType[],
    }
  );

  return (
    <ScrollView className="flex-1 bg-[#0f0f0f] ">
      <SafeAreaView className="px-2">
        <NotesHeader />
        <View className="flex-row">
          <View className="flex-1 mr-2">
            {formattedNotes.left.map((note, index) => (
              <Note key={note.id} note={note} index={index} />
            ))}
          </View>
          <View className="flex-1 ml-2">
            {formattedNotes.right.map((note, index) => (
              <Note key={note.id} note={note} index={index} />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
