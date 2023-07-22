import { ITask } from 'src/app/model';

export const initTaskListState: ITask[] = [
  {
    id: 123,
    title: 'Test task red',
    description: 'Description of the test task (Test task red)...',
    deadline: '2021-03-03',
    isDone: false,
  },
  {
    id: 124,
    title: 'Test task red',
    description: 'Description of the test task (Test task orage)...',
    deadline: '2023-07-22',
    isDone: false,
  },
  {
    id: 125,
    title: 'Test task white',
    description: 'Description of the test task (Test task white)...',
    deadline: '2023-07-27',
    isDone: false,
  },
  {
    id: 126,
    title: 'Test task orange and long long teeeeeeexxxxxxxxxxxxxxtttttttttttt',
    description:
      'Description of the test task (Test task white)...dskjfhsadkjfhksadjhfksdjhfkjsdfkhsd dkfsdk dsfskdj dsfjhskd sdjfhkasd ksdjhf ksd  ksdjfhk sd  kdjfk sdf skdjfh skdj',
    deadline: '2023-07-24',
    isDone: false,
  },
];
