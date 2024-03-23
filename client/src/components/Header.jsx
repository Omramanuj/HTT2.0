/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

export default function Header() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div className="page-header clear-filter" filter-color="green">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url('https://media.istockphoto.com/id/1003089724/photo/raw-healthy-food-clean-eating-vegetables-source-protein-vegetarians.webp?b=1&s=170667a&w=0&k=20&c=-OyAtVEeDzPo24z9Boqm5zgG2LyrjgV7K9bUY_D9H0o=')"
                    }}
                    ref={pageHeader}
                ></div>
                <div className="flex flex-col">
                    <div className="intro brand m-[8rem]">
                        <h1 className="h1-seo">
                            Hi I'm Fatima Fiasal
                        </h1>
                        Start Your Fitness Journey Today
                    </div>
                    <div className="content-center brand font-bold">
                        <h1 className="h1-seo">Fat To Slim</h1>
                        <h3>EAT | SLEEP | LOSE WEIGHT</h3>

                    </div>
                </div>
            </div>
        </>
    );
}
