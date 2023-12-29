import MainLayout from "@/components/layout/MainLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MainLayout>
  );
}
