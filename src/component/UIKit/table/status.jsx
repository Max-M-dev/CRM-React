import { ACTIVE, PROCESS, END } from "../../../constants/statusName";
export default function Status({ value }) {
	switch (value) {
		case "active":
			return <label className="badge badge-danger">{ACTIVE}</label>;
			break;
		case "progress":
			return <label className="badge badge-warning">{PROCESS}</label>;
			break;
		case "end":
			return <label className="badge badge-success">{END}</label>;
			break;
		default:
			throw new Error("Status value not found");
			break;
	}
}
