import { Text, View } from 'react-native';
import { Checkbox } from '../Checkbox';

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  createdAt: number;
};

interface TodoSectionProps {
  todos: Todo[];
}

export function TodoSection({ todos }: TodoSectionProps) {
  return (
    <View className="p-2 mt-6">
      <View className="p-4">
        <Text className="text-xl text-white">things to do</Text>
      </View>
      <View className="bg-[#17191a] p-6 rounded-[40px] mt-2">
        {todos.length ? (
          todos.map((todo, index) => (
            <Checkbox key={todo.id} task={todo.task} completed={todo.completed} index={index} />
          ))
        ) : (
          <Text className="text-[#cbd5e1] text-base">you have no todos for that day</Text>
        )}
      </View>
    </View>
  );
}
