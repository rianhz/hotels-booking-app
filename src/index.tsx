import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
);
