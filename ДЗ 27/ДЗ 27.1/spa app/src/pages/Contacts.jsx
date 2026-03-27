import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <div className="page-content">
      <h1>Головна сторінка</h1>
      <p>Тут ви можете керувати своїми справами:</p>
      <TodoList />
    </div>
  );
};

export default Home;