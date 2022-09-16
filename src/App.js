import Header from "./component/section/header";
import Sidebar from "./component/section/sidebar";
import Footer from "./component/section/footer";
import "./style/style.css";
import Index from "./page";

function App() {
	return (
		<div className="container-scroller">
			<Header />
			<div className="container-fluid page-body-wrapper">
				<Sidebar />
				<div className="main-panel">
					<div className="content-wrapper">
						<Index />
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

export default App;
