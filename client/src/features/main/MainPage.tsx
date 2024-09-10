import React, { useEffect, useState } from "react";
import image from "./style/XXXL (1).webp";
import "./style/main.css";

import { BiSolidToTop } from "react-icons/bi";
import Footer from "../footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import SliderBlock from "../news/SliderBlock";

function MainPage(): JSX.Element {
	const [classStopScroll, setClassStopScrolling] = useState<"" | "stop-scrolling">(""); // Initial top position
	const scrollToFooter = () => {
		const footerElement = document.getElementById("footer");
		if (footerElement) {
			footerElement.scrollIntoView({ behavior: "smooth" });
		}
	};
  const navigate = useNavigate();

const handleServices = () => {
    navigate('/services');
};
	const stopPoint = 450;
	useEffect(() => {
		const handleScroll = (): void => {
			const { scrollY } = window;
			if (scrollY > stopPoint) {
				setClassStopScrolling("stop-scrolling");
			} else {
				setClassStopScrolling("");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="wrapper">
			<div className="forname">
				<h1 className="font-link" id="bigName">
					Стоматологическая клиника LeoDent
				</h1>
				<h1 className="par">
					Мы рады помочь вам в решении ваших проблем, не стесняйтесь обращаться к нам
				</h1>
				<div className="navbtns">
					<button onClick={handleServices} id="b1" type="button" className="btn btn-outline-light ">
						<NavLink className="navlink2" >
							Услуги
						</NavLink>
					</button>
					<button onClick={scrollToFooter} id="b2" type="button" className="btn btn-outline-light">
						<NavLink className="navlink3" to="#footer">
							Связаться
						</NavLink>
					</button>
				</div>
				<div className="container">
					{/* <div className="forname">
          <div id='namecont' className={`naming ${classStopScroll}`}>
            <h1 className="font-link" id='bigName'>Стоматологическая клиника LeoDent</h1>
            <h1 className='par'>
            Мы рады помочь вам в решении ваших проблем, не стесняйтесь обращаться к нам</h1>
           <div className='navbtns'>
           <button id="b1" type="button" className="btn btn-outline-light">
                                  <NavLink className="navlink2" to="/services">
                                  Подробнее
                                  </NavLink>
                                </button>
                                <button id="b2" type="button" className="btn btn-outline-light">
                                  <NavLink onClick={scrollToFooter} className="navlink3" to="#footer">
                                  Связаться
                                  </NavLink>
                                </button>
           </div>
                                 
          </div> */}
				</div>

				{/* <div className="preload" data-preaload>
                  <div className="circle"></div>
                  <p className="text">Garage Guru</p>
                </div> */}

				{/* <div className="links_container">
                                <button id="b1" type="button" className="btn btn-outline-light">
                                  <NavLink className="navlink" to="/services">
                                    Сервисы
                                  </NavLink>
                                </button>

                                <button id="b1" type="button" className="btn btn-outline-light">
                                  <NavLink className="navlink" to="/sales">
                                    Акции
                                  </NavLink>
                                </button>
                              </div> */}
				<div className="videocontainer">
					<div id="background-video">
						<img className="hands" src={image} alt="main" />{" "}
					</div>
				</div>

				<div className="about">
					<div className="abouttext">
						<h2>О нас</h2>
						<h3>Мы крутые и от Первого меда</h3>
					</div>
				</div>
				<div className="sliderPart">
					<SliderBlock />
				</div>
			</div>
		</div>
	);
}

export default MainPage;
