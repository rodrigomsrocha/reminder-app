import { Text, View } from 'react-native';

interface NoteProps {
  note: {
    title: string;
    description: string;
  };
  index: number;
}

export function Note({ note, index }: NoteProps) {
  return (
    <View className={`px-4 py-6 bg-[#17191a] rounded-[40px] ${index !== 0 && 'mt-4'}`}>
      <Text numberOfLines={1} ellipsizeMode="tail" className="text-lg text-white mb-4">
        {note.title}
      </Text>
      <Text numberOfLines={4} className="text-gray-300 text-base">
        {note.description}
      </Text>
    </View>
  );
}
