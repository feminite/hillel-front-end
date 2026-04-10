import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = { items: [], loading: false };
const mockReducer = (state = initialState, action) => state;
const store = createStore(mockReducer);

const renderWithRedux = (component) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('Todo App Tests', () => {

  // 1. Title test
  test('сторінка має заголовок Todo List', () => {
    renderWithRedux(<App />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  // 2. Input test (letters and numbers)
  test('у поле можна ввести цифри та букви', () => {
    renderWithRedux(<App />);
    const input = screen.getByPlaceholderText(/Що потрібно зробити?/i);
    fireEvent.change(input, { target: { value: 'Купити 2 яблука' } });
    expect(input.value).toBe('Купити 2 яблука');
  });

  // 3. "Додати" status test
  test('відображає текст завантаження, коли loading: true', () => {
    const loadingStore = createStore(() => ({ items: [], loading: true }));
    render(<Provider store={loadingStore}><App /></Provider>);
    expect(screen.getByText(/Завантаження ваших справ/i)).toBeInTheDocument();
  });

  // 4. Clear field test
  test('поле вводу стає порожнім після натискання "Додати"', () => {
    renderWithRedux(<App />);
    const input = screen.getByPlaceholderText(/Що потрібно зробити?/i);
    const addButton = screen.getByText(/Додати/i);

    fireEvent.change(input, { target: { value: 'Нова задача' } });
    fireEvent.click(addButton);

    expect(input.value).toBe('');
  });

  // 5. "Очистити все" test
  test('кнопка "Очистити все" присутня на екрані', () => {
    renderWithRedux(<App />);
    const clearButton = screen.getByText(/Очистити все/i);
    expect(clearButton).toBeInTheDocument();
  });
});