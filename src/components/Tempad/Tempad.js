import React from "react";
import "./Tempad.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CodeIcon from "@mui/icons-material/Code";

import DateRangeIcon from "@mui/icons-material/DateRange";
import Groups3Icon from "@mui/icons-material/Groups3";
import DomainIcon from "@mui/icons-material/Domain";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Tempad = () => {
	useEffect(() => {
		Aos.init({
			duration: 400,
    		easing: 'ease-in-out',
		});
	  }, []);
	return (
		<div className="fullOuter">
			<div className="outerdiv" data-aos="fade-up">
				<div className="leftdiv">
					<h4 data-aos="fade-up">Announcing</h4>
					<h1 data-aos="fade-up">SPIT Hackathon 2024</h1>
					<h3 data-aos="fade-up">
						Following tradition, CSI-SPIT is conducting the annual
						24-hour <em>SPIT Hackathon</em> in February 2024. With a
						great team and skilled panel of judges, this hackathon
						will be an ideal platform to put student's knowledge to
						use and network with peers.
					</h3>
					<div className="Details" >
						<div className="Detail">
							<p className="header">
								<DateRangeIcon className="detailicon" data-aos="fade-right"/>
								<p>Date</p>
							</p>
							<p className="extra" data-aos="fade-right">
								10th and 11th February, 2024
							</p>
						</div>
						<div className="Detail">
							<p className="header">
								<Groups3Icon className="detailicon" data-aos="fade-right"/>
								<p>TeamSize</p>
							</p>
							<p className="extra" data-aos="fade-right">2-4 Members</p>
						</div>
						<div className="Detail">
							<p className="header">
								<DomainIcon className="detailicon" data-aos="fade-right" />
								<p>Domains</p>
							</p>
							<p className="extra" data-aos="fade-right">
								Web/App Dev, AI/ML, Blockchain, FinTech
							</p>
						</div>
						<div className="Detail">
							<p className="header">
								<LocationOnIcon className="detailicon" data-aos="fade-right" />
								<p>Location</p>
							</p>
							<p className="extra" data-aos="fade-right">
								Sardar Patel Institute of Technology, Mumbai
							</p>
						</div>
					</div>
				</div>
				<div className="rightdiv">
					<div className="icon">
						<PhoneAndroidIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
							data-aos="fade-up"
						/>
						<p className="Name" data-aos="fade-up">Mobile-Dev</p>
					</div>
					<div className="icon">
						<RocketLaunchIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
							data-aos="fade-up"
						/>
						<p className="Name" data-aos="fade-up">AI/ML</p>
					</div>
					<div className="icon">
						<LanguageIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
							data-aos="fade-up"
						/>
						<p className="Name" data-aos="fade-up">Web-Dev</p>
					</div>
					<div className="icon">
						<CurrencyBitcoinIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
							data-aos="fade-up"
						/>
						<p className="Name" data-aos="fade-up">BlockChain</p>
					</div>
					<div className="icon">
						<PriceChangeIcon
							className="innerIcon"
							style={{ fontSize: "6rem" }}
							data-aos="fade-up"
						/>
						<p className="Name" data-aos="fade-up">FinTech</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tempad;
