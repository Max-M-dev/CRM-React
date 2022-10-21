import { StatisticsTextDanger } from "../component/statistics/indicators/statisticsText";
export default function Index(props) {
	return (
		<div className="row">
			<div className="col-sm-12">
				<div className="home-tab">
					<div className="d-sm-flex align-items-center justify-content-between border-bottom">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active ps-0"
									id="home-tab"
									data-bs-toggle="tab"
									href="#overview"
									role="tab"
									aria-controls="overview"
									aria-selected="true"
								>
									Overview
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="profile-tab"
									data-bs-toggle="tab"
									href="#audiences"
									role="tab"
									aria-selected="false"
								>
									Audiences
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									id="contact-tab"
									data-bs-toggle="tab"
									href="#demographics"
									role="tab"
									aria-selected="false"
								>
									Demographics
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link border-0"
									id="more-tab"
									data-bs-toggle="tab"
									href="#more"
									role="tab"
									aria-selected="false"
								>
									More
								</a>
							</li>
						</ul>
						<div>
							<div className="btn-wrapper">
								<a href="#" className="btn btn-otline-dark align-items-center">
									<i className="icon-share"></i> Share
								</a>
								<a href="#" className="btn btn-otline-dark">
									<i className="icon-printer"></i> Print
								</a>
								<a href="#" className="btn btn-primary text-white me-0">
									<i className="icon-download"></i> Export
								</a>
							</div>
						</div>
					</div>
					<div className="tab-content tab-content-basic">
						<div
							className="tab-pane fade show active"
							id="overview"
							role="tabpanel"
							aria-labelledby="overview"
						>
							<div className="row">
								<div className="col-sm-12">
									<div className="statistics-details d-flex align-items-center justify-content-between">
										<StatisticsTextDanger
											title="Кол. денег"
											rate="1 000"
											percent="+0.1%"
										/>
									</div>
								</div>
							</div>
							<div className="row">
								{/* <div className="col-lg-8 d-flex flex-column">
									<div className="row flex-grow">
										 <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">cart lineChart</div>
									</div>
								</div> */}
								<div className="col-lg-4 d-flex flex-column">
									<div className="row flex-grow">
										<div className="col-md-6 col-lg-12 grid-margin stretch-card">
											<div className="card card-rounded">
												<div className="card-body">
													<div className="row">
														<div className="col-sm-6">
															<div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
																<div className="circle-progress-width">
																	<div
																		id="totalVisitors"
																		className="progressbar-js-circle pr-2"
																	></div>
																</div>
																<div>
																	<p className="text-small mb-2">
																		Total Visitors
																	</p>
																	<h4 className="mb-0 fw-bold">26.80%</h4>
																</div>
															</div>
														</div>
														<div className="col-sm-6">
															<div className="d-flex justify-content-between align-items-center">
																<div className="circle-progress-width">
																	<div
																		id="visitperday"
																		className="progressbar-js-circle pr-2"
																	></div>
																</div>
																<div>
																	<p className="text-small mb-2">
																		Visits per day
																	</p>
																	<h4 className="mb-0 fw-bold">9065</h4>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-8 d-flex flex-column">
									<div className="row flex-grow">
										<div className="col-12 grid-margin stretch-card">
											<div className="card card-rounded">
												<div className="card-body">
													<div className="d-sm-flex justify-content-between align-items-start">
														<div>
															<h4 className="card-title card-title-dash">
																Market Overview
															</h4>
															<p className="card-subtitle card-subtitle-dash">
																Lorem ipsum dolor sit amet consectetur
																adipisicing elit
															</p>
														</div>
														<div>
															<div className="dropdown">
																<button
																	className="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0"
																	type="button"
																	id="dropdownMenuButton2"
																	data-bs-toggle="dropdown"
																	aria-haspopup="true"
																	aria-expanded="false"
																>
																	{" "}
																	This month{" "}
																</button>
																<div
																	className="dropdown-menu"
																	aria-labelledby="dropdownMenuButton2"
																>
																	<h6 className="dropdown-header">Settings</h6>
																	<a className="dropdown-item" href="#">
																		Action
																	</a>
																	<a className="dropdown-item" href="#">
																		Another action
																	</a>
																	<a className="dropdown-item" href="#">
																		Something else here
																	</a>
																	<div className="dropdown-divider"></div>
																	<a className="dropdown-item" href="#">
																		Separated link
																	</a>
																</div>
															</div>
														</div>
													</div>
													<div className="d-sm-flex align-items-center mt-1 justify-content-between">
														<div className="d-sm-flex align-items-center mt-4 justify-content-between">
															<h2 className="me-2 fw-bold">$36,2531.00</h2>
															<h4 className="me-2">USD</h4>
															<h4 className="text-success">(+1.37%)</h4>
														</div>
														<div className="me-3">
															<div id="marketing-overview-legend"></div>
														</div>
													</div>
													<div className="chartjs-bar-wrapper mt-3">
														<canvas id="marketingOverview"></canvas>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row flex-grow">
										<div className="col-12 grid-margin stretch-card">
											<div className="card card-rounded table-darkBGImg">
												<div className="card-body">
													<div className="col-sm-8">
														<h3 className="text-white upgrade-info mb-0">
															Enhance your{" "}
															<span className="fw-bold">Campaign</span> for
															better outreach
														</h3>
														<a href="#" className="btn btn-info upgrade-btn">
															Upgrade Account!
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row flex-grow"></div>
									<div className="row flex-grow">
										<div className="col-md-6 col-lg-6 grid-margin stretch-card">
											<div className="card card-rounded">
												<div className="card-body card-rounded">
													<h4 className="card-title  card-title-dash">
														Recent Events
													</h4>
													<div className="list align-items-center border-bottom py-2">
														<div className="wrapper w-100">
															<p className="mb-2 font-weight-medium">
																Change in Directors
															</p>
															<div className="d-flex justify-content-between align-items-center">
																<div className="d-flex align-items-center">
																	<i className="mdi mdi-calendar text-muted me-1"></i>
																	<p className="mb-0 text-small text-muted">
																		Mar 14, 2019
																	</p>
																</div>
															</div>
														</div>
													</div>
													<div className="list align-items-center border-bottom py-2">
														<div className="wrapper w-100">
															<p className="mb-2 font-weight-medium">
																Other Events
															</p>
															<div className="d-flex justify-content-between align-items-center">
																<div className="d-flex align-items-center">
																	<i className="mdi mdi-calendar text-muted me-1"></i>
																	<p className="mb-0 text-small text-muted">
																		Mar 14, 2019
																	</p>
																</div>
															</div>
														</div>
													</div>
													<div className="list align-items-center border-bottom py-2">
														<div className="wrapper w-100">
															<p className="mb-2 font-weight-medium">
																Quarterly Report
															</p>
															<div className="d-flex justify-content-between align-items-center">
																<div className="d-flex align-items-center">
																	<i className="mdi mdi-calendar text-muted me-1"></i>
																	<p className="mb-0 text-small text-muted">
																		Mar 14, 2019
																	</p>
																</div>
															</div>
														</div>
													</div>
													<div className="list align-items-center border-bottom py-2">
														<div className="wrapper w-100">
															<p className="mb-2 font-weight-medium">
																Change in Directors
															</p>
															<div className="d-flex justify-content-between align-items-center">
																<div className="d-flex align-items-center">
																	<i className="mdi mdi-calendar text-muted me-1"></i>
																	<p className="mb-0 text-small text-muted">
																		Mar 14, 2019
																	</p>
																</div>
															</div>
														</div>
													</div>

													<div className="list align-items-center pt-3">
														<div className="wrapper w-100">
															<p className="mb-0">
																<a href="#" className="fw-bold text-primary">
																	Show all{" "}
																	<i className="mdi mdi-arrow-right ms-2"></i>
																</a>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 col-lg-6 grid-margin stretch-card">
											<div className="card card-rounded">
												<div className="card-body">
													<div className="d-flex align-items-center justify-content-between mb-3">
														<h4 className="card-title card-title-dash">
															Activities
														</h4>
														<p className="mb-0">20 finished, 5 remaining</p>
													</div>
													<ul className="bullet-line-list">
														<li>
															<div className="d-flex justify-content-between">
																<div>
																	<span className="text-light-green">
																		Ben Tossell
																	</span>{" "}
																	assign you a task
																</div>
																<p>Just now</p>
															</div>
														</li>
														<li>
															<div className="d-flex justify-content-between">
																<div>
																	<span className="text-light-green">
																		Oliver Noah
																	</span>{" "}
																	assign you a task
																</div>
																<p>1h</p>
															</div>
														</li>
														<li>
															<div className="d-flex justify-content-between">
																<div>
																	<span className="text-light-green">
																		Jack William
																	</span>{" "}
																	assign you a task
																</div>
																<p>1h</p>
															</div>
														</li>
														<li>
															<div className="d-flex justify-content-between">
																<div>
																	<span className="text-light-green">
																		Leo Lucas
																	</span>{" "}
																	assign you a task
																</div>
																<p>1h</p>
															</div>
														</li>
														<li>
															<div className="d-flex justify-content-between">
																<div>
																	<span className="text-light-green">
																		Thomas Henry
																	</span>{" "}
																	assign you a task
																</div>
																<p>1h</p>
															</div>
														</li>
														<li>
															<div className="d-flex justify-content-between">
																<div>
																	<span className="text-light-green">
																		Ben Tossell
																	</span>{" "}
																	assign you a task
																</div>
																<p>1h</p>
															</div>
														</li>
														<li>
															<div className="d-flex justify-content-between">
																<div>
																	<span className="text-light-green">
																		Ben Tossell
																	</span>{" "}
																	assign you a task
																</div>
																<p>1h</p>
															</div>
														</li>
													</ul>
													<div className="list align-items-center pt-3">
														<div className="wrapper w-100">
															<p className="mb-0">
																<a href="#" className="fw-bold text-primary">
																	Show all{" "}
																	<i className="mdi mdi-arrow-right ms-2"></i>
																</a>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 d-flex flex-column">
									<div className="row flex-grow">
										<div className="col-12 grid-margin stretch-card">
											<div className="card card-rounded">
												<div className="card-body">
													<div className="row">
														<div className="col-lg-12">
															<div className="d-flex justify-content-between align-items-center mb-3">
																<h4 className="card-title card-title-dash">
																	Type By Amount
																</h4>
															</div>
															<canvas
																className="my-auto"
																id="doughnutChart"
																height="200"
															></canvas>
															<div
																id="doughnut-chart-legend"
																className="mt-5 text-center"
															></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row flex-grow">
										<div className="col-12 grid-margin stretch-card">
											<div className="card card-rounded">
												<div className="card-body">
													<div className="row">
														<div className="col-lg-12">
															<div className="d-flex justify-content-between align-items-center mb-3">
																<div>
																	<h4 className="card-title card-title-dash">
																		Leave Report
																	</h4>
																</div>
																<div>
																	<div className="dropdown">
																		<button
																			className="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0"
																			type="button"
																			id="dropdownMenuButton3"
																			data-bs-toggle="dropdown"
																			aria-haspopup="true"
																			aria-expanded="false"
																		>
																			{" "}
																			Month Wise{" "}
																		</button>
																		<div
																			className="dropdown-menu"
																			aria-labelledby="dropdownMenuButton3"
																		>
																			<h6 className="dropdown-header">
																				week Wise
																			</h6>
																			<a className="dropdown-item" href="#">
																				Year Wise
																			</a>
																		</div>
																	</div>
																</div>
															</div>
															<div className="mt-3">
																<canvas id="leaveReport"></canvas>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row flex-grow">
										<div className="col-12 grid-margin stretch-card">
											<div className="card card-rounded">
												<div className="card-body">
													<div className="row">
														<div className="col-lg-12">
															<div className="d-flex justify-content-between align-items-center mb-3">
																<div>
																	<h4 className="card-title card-title-dash">
																		Top Performer
																	</h4>
																</div>
															</div>
															<div className="mt-3">
																<div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
																	<div className="d-flex">
																		<img
																			className="img-sm rounded-10"
																			src="images/faces/face1.jpg"
																			alt="profile"
																		/>
																		<div className="wrapper ms-3">
																			<p className="ms-1 mb-1 fw-bold">
																				Brandon Washington
																			</p>
																			<small className="text-muted mb-0">
																				162543
																			</small>
																		</div>
																	</div>
																	<div className="text-muted text-small">
																		1h ago
																	</div>
																</div>
																<div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
																	<div className="d-flex">
																		<img
																			className="img-sm rounded-10"
																			src="images/faces/face2.jpg"
																			alt="profile"
																		/>
																		<div className="wrapper ms-3">
																			<p className="ms-1 mb-1 fw-bold">
																				Wayne Murphy
																			</p>
																			<small className="text-muted mb-0">
																				162543
																			</small>
																		</div>
																	</div>
																	<div className="text-muted text-small">
																		1h ago
																	</div>
																</div>
																<div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
																	<div className="d-flex">
																		<img
																			className="img-sm rounded-10"
																			src="images/faces/face3.jpg"
																			alt="profile"
																		/>
																		<div className="wrapper ms-3">
																			<p className="ms-1 mb-1 fw-bold">
																				Katherine Butler
																			</p>
																			<small className="text-muted mb-0">
																				162543
																			</small>
																		</div>
																	</div>
																	<div className="text-muted text-small">
																		1h ago
																	</div>
																</div>
																<div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
																	<div className="d-flex">
																		<img
																			className="img-sm rounded-10"
																			src="images/faces/face4.jpg"
																			alt="profile"
																		/>
																		<div className="wrapper ms-3">
																			<p className="ms-1 mb-1 fw-bold">
																				Matthew Bailey
																			</p>
																			<small className="text-muted mb-0">
																				162543
																			</small>
																		</div>
																	</div>
																	<div className="text-muted text-small">
																		1h ago
																	</div>
																</div>
																<div className="wrapper d-flex align-items-center justify-content-between pt-2">
																	<div className="d-flex">
																		<img
																			className="img-sm rounded-10"
																			src="images/faces/face5.jpg"
																			alt="profile"
																		/>
																		<div className="wrapper ms-3">
																			<p className="ms-1 mb-1 fw-bold">
																				Rafell John
																			</p>
																			<small className="text-muted mb-0">
																				Alaska, USA
																			</small>
																		</div>
																	</div>
																	<div className="text-muted text-small">
																		1h ago
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
