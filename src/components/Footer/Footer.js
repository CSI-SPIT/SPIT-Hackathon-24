import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
		
			<div class="section">
				<p>Let's Connect</p>
				<div class="link">
					<i class="fa fa-github"></i>
					<a class="name" href="https://github.com/CSI-SPIT">
						GitHub
					</a>
				</div>
				<div class="link">
					<i class="fa fa-linkedin"></i>
					<a
						class="name"
						href="https://www.linkedin.com/company/s-p-i-t-csi/mycompany/"
					>
						LinkedIn
					</a>
				</div>
			</div>
			<div class="section">
				<p>Social Media</p>
				<div class="link">
					<i class="fa fa-instagram"></i>
					<a class="name" href="https://www.instagram.com/csispit/">
						Instagram
					</a>
				</div>
				<div class="link">
					<i class="fa fa-facebook-official"></i>
					<a class="name" href="https://www.facebook.com/CSI.SPIT/">
						Facebook
					</a>
				</div>
			</div>
			<h3 class="credits">
				Developed by{" "}
				<a href="https://www.linkedin.com/in/satyam-vyas/">
					Satyam Vyas
				</a>{" "}
				and{" "}
				<a href="https://www.linkedin.com/in/saachi-peswani-419995258/">
					Saachi Peswani
				</a>
			</h3>
		</footer>
	);
};

export default Footer;
