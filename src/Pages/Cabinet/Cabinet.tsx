import Top from "../../Components/CabinetComponents/Top/Top";
import "./Cabinet.scss";

const Cabinet = () => {
	return (
		<div className="lecabinet-container light-theme">
			<div className="top" id="top">
				<Top></Top>
			</div>
		</div>
	);
};

export default Cabinet;
