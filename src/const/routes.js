import Todo from '../components/Todo/Todo';
import About from '../components/About/About';

export const routes = [
  {
    id: 1,
    value: 'Обо мне',
    link: '/',
    component: About,
  },
  {
    id: 2,
    value: 'Дела',
    link: '/todo',
    component: Todo,
  }
];

