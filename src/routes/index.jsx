import Layout from "./../component/sectionPage/layout";

import Index from "../page/index";
import Clients from "../page/clients";
import OrderList from "../page/orderList";
import ClientAdd from "../page/clientAdd";
import ClientProfile from "../page/clientProfile";
import OrderAdd from "../page/orderAdd";
import NotFount from "../page/notFound";
import Test from "../page/test";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Index />} />
					<Route path="orders">
						<Route index element={<OrderList />} />
						<Route path="add" element={<OrderAdd />} />
						{/* <Route path=":id" element={} /> */}
					</Route>
					<Route path="test" element={<Test />} />
					<Route path="clients">
						<Route index element={<Clients />} />
						<Route path="add" element={<ClientAdd />} />
						<Route path=":id" element={<ClientProfile />} />
					</Route>
					<Route path="*" element={<NotFount />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
