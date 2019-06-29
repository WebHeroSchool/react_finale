import TodoList from "../components/TodoList/TodoList";
import About from "../components/About/About";

export const routes = [
  {
    id: 1,
    value: 'Обо мне',
    link: '/',
    component: About,
  },
  {
    id: 2,
    value: 'Список оставшихся дел',
    link: '/todo',
    component: TodoList,
  }
];

