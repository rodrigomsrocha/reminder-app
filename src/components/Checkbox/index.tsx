import { Check } from 'phosphor-react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface CheckboxProp {
  index: number;
  task: string;
  completed: boolean;
}

export function Checkbox({ index, task, completed }: CheckboxProp) {
  return (
    <BouncyCheckbox
      text={task}
      isChecked={completed}
      fillColor="#fff"
      innerIconStyle={{ borderRadius: 8 }}
      iconStyle={{ borderRadius: 8 }}
      textStyle={{ color: '#cbd5e1' }}
      iconComponent={<Check color="#17191a" size={20} weight="bold" />}
      className={`${index !== 0 && 'mt-4'}`}
    />
  );
}
