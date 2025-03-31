import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from '@components/Auth/AuthContext';
import { ThemeProvider } from '@components/Theme/ThemeContext';

import { router } from './routes';
import { store } from './store';
import './App.css';
import { ModalOutlet } from '@components/Modal/ModalOutlet';
import { useModal } from '@components/Modal/useModal';

const queryClient = new QueryClient();

function App() {
  const modal = useModal();
  const openModal = () => {
    const id = crypto.randomUUID() as string;
    modal.showModal({
      id,
      onClose: () => {},
      Component: ({ closeModal }) => (
        <div>
          <input className="border-2 p-[20px] m-[20px] border-sky-500 rounded-4" />
          <input className="border-2 p-[20px] m-[20px] border-sky-500 rounded-4" autoFocus />
          <input className="border-2 p-[20px] m-[20px] border-sky-500 rounded-4" />
          <button onClick={closeModal} className="rounded-4 p-[20px] m-[20px] border-red-500 bg-red-100 rounded-4">
            ZAMKNIJ
          </button>
        </div>
      ),
      animation: 'slide',
      closeOnEsc: true,
      closeOnOverlayClick: true,
    });
  };

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </Provider>
      <div onClick={openModal} className="fixed z-[9999] bottom-[20px] p-[50px] bg-red-500">
        Kliknij aby otworzyć modal
      </div>
      <ModalOutlet />
    </>
  );
}

export default App;
