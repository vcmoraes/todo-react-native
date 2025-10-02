import { atomWithStorage } from 'jotai/utils';

// TODO: in react-native we use react-native-async-storage atomWithStorage('tasks', [], asyncStorage);
export const tasksAtom = atomWithStorage('tasks', []);
