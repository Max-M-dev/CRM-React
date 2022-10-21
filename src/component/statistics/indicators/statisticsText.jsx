import style from "./statisticsText.css";
export function StatisticsTextDanger({ title, rate, percent }) {
	return (
		<div>
			<p className={style["statistics-title"]}>{title}</p>
			<h3 className={style["rate-percentage"]}>{rate}</h3>
			<p className="text-danger d-flex">
				<i className="mdi mdi-menu-down"></i>
				<span>{percent}</span>
			</p>
		</div>
	);
}
export function StatisticsTextSuccess({ title, rate, percent }) {
	return (
		<div>
			<p className={style["statistics-title"]}>{title}</p>
			<h3 className={style["rate-percentage"]}>{rate}</h3>
			<p className="text-success d-flex">
				<i className="mdi mdi-menu-up"></i>
				<span>{percent}</span>
			</p>
		</div>
	);
}
