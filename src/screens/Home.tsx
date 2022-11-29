import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from '../components/Calendar';
import { Header } from '../components/Header/Index';
import { NotesSection } from '../components/NotesSection';
import { TodoSection } from '../components/TodoSection';
import { todos } from '../mocks/todo';

export function Home() {
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());

  const updateSelectedDay = (day: number) => {
    setSelectedDay(day);
  };

  const filteredTodos = todos.filter((todo) => todo.createdAt === selectedDay);

  return (
    <SafeAreaView className="bg-[#0f0f0f] flex-1">
      <ScrollView>
        <Header />
        <Calendar selectedDay={selectedDay} onPress={updateSelectedDay} />
        <TodoSection todos={filteredTodos} />
        <NotesSection />
      </ScrollView>
    </SafeAreaView>
  );
}
