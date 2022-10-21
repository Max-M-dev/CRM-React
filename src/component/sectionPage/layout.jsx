import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className="container-scroller">
			<Header />
			<div className="container-fluid page-body-wrapper">
				<Sidebar />
				<div className="main-panel">
					<div className="content-wrapper">
						<Outlet />
					</div>
					{/* <!-- content-wrapper ends --> */}
					{/* <!-- partial:partials/_footer.html --> */}
					<Footer />
					{/* <!-- partial --> */}
				</div>
				{/* <!-- main-panel ends --> */}
			</div>
			{/* <!-- page-body-wrapper ends --> */}
		</div>
	);
}
