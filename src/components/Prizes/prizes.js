import React from "react";
import "./prizes.css";

const Prizes = () => {
	return (
		<div class="outer">
			<h2 class="heading">Prizes</h2>
			<div class="box">
				<div class="innerbox">
					<h3 class="rank">Grand Prize Pool</h3>
					<h2 class="prize">₹ 1,00,000+</h2>
					<p class="extras">
						With Internship Opportunities, Exciting Goodies & Lots
						More!
					</p>
				</div>
				<div class="innerbox">
					<h3 class="rank">Certificates</h3>
					<h2 class="prize">
						Certificate of Excellence for Top 3 Teams
					</h2>
					<p class="extras">
						Certificate of Distinction for Top 10 Teams &
						Certificate of Participation to All Teams!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Prizes;