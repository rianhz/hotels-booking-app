import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux/es/exports";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</Provider>
);
