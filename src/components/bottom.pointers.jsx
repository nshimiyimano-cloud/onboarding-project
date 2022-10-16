import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage0 from "../images/custshort-assignment-home-small.jpg";
import myImage1 from "../images/custshort-assignment-first page-small.jpg";
import myImage2 from "../images/custshort-assignment-second-small.jpg";
import myImage3 from "../images/custshort-assignment-third-small.jpg";
import myImage4 from "../images/custshort-assignment-first page-small.jpg";


import { useDispatch, useSelector } from 'react-redux';
import { action } from './store';

function BottomPointers() {

    const dispatch = useDispatch();

    let noDot = useSelector(state => state.isDot0);
    let isStep0Active = useSelector(state => state.isStep0Active);
    let isStep1Active = useSelector(state => state.isStep1Active);
    let isStep2Active = useSelector(state => state.isStep2Active);
    let isStep3Active = useSelector(state => state.isStep3Active);
    let isStep4Active = useSelector(state => state.isStep4Active);
    let lineWidth = useSelector(state => state.stepperLineWidth);
    let step0 = document.getElementById("step0"); // aim on first step to remove class
    let main=document.getElementById("Main");


    if (noDot === true) {
        isStep0Active = true;
        isStep1Active = false;
        isStep2Active = false;
        setTimeout(() => {
            dispatch(action.changeTitle("How are you planning to use Eden"));
            dispatch(action.changesubTitle("W'll streamline your setup experience accordingly"));
            dispatch(action.changeStep3(true))
            dispatch(action.changeDot3(true))
        }, 0)
        isStep4Active = false;
    }
    else {
        setTimeout(() => {
            dispatch(action.changeStep0(false))
            dispatch(action.changeDot0(false))

        })
    }

    const firstStep = () => {

        if (lineWidth !== 40 && noDot && lineWidth !== 68 && lineWidth !== 90) {
            step0.classList.remove("pointer-active");
            main.classList.remove("rotate");

            dispatch(action.changeStep3(false));
            dispatch(action.changeStep2(false));
            dispatch(action.changeDot3(false))
            dispatch(action.changeDot2(false))
            dispatch(action.changeStLineWidth(0));
            dispatch(action.changeTitle("Welcome First things First"));
            dispatch(action.changesubTitle("You can Alwayz change them later"));
            dispatch(action.changeDot0(false))
            dispatch(action.changeStep0(false));
            dispatch(action.changeStep1(true));
            dispatch(action.changeBtnMsg("Create Workspace"));
            dispatch(action.changeStep2(false));

        }
    }



    const secondStep = () => {
        if (lineWidth === 0 && noDot === false && lineWidth !== 68 && lineWidth !== 90) {

            dispatch(action.changeTitle("Let's setup home for your all work"));
            dispatch(action.changesubTitle("You can alwayz create another workspace later"));
            dispatch(action.changeStep2(true));
            dispatch(action.changeBtnMsg("Create Workspace"));
            dispatch(action.changeStep0(false));
            dispatch(action.changeStep1(false));
            dispatch(action.changeStep3(false));
            dispatch(action.changeStep4(false));

            if (lineWidth !== 103) {
                dispatch(action.changeStLineWidth(40))
            }
        }
    }


    const thirdStep = () => {
        if (lineWidth === 40 && lineWidth !== 90) {
            dispatch(action.changeTitle("How are you planning to use Eden"));
            dispatch(action.changesubTitle("W'll streamline your setup experience accordingly"));
            dispatch(action.changeStep3(true));
            dispatch(action.changeBtnMsg("Create Workspace"));
            dispatch(action.changeStep0(false));
            dispatch(action.changeStep1(false));
            dispatch(action.changeStep2(false));
            dispatch(action.changeStep4(false));

            if (lineWidth !== 103) {
                dispatch(action.changeStLineWidth(68))
            }
        }

    }

    const fourthStep = () => {
        if (lineWidth === 68) {
            dispatch(action.changeTitle("Congratulations, Eren"));
            dispatch(action.changesubTitle("You have completed onBoarding, you can start using the Eden"))
            dispatch(action.changeStep4(true));
            dispatch(action.changeBtnMsg("Lounch Eden"));
            dispatch(action.changeStep0(false));
            dispatch(action.changeStep1(false));
            dispatch(action.changeStep2(false));
            dispatch(action.changeStep3(false));


            if (lineWidth !== 90) {
                dispatch(action.changeStLineWidth(90))
            }
        }
    }

    return (


        <Fragment>
            <ul className="pointer-img-container d-flex flex-nowrap justify-content-center mt-3">
                <li id='step0' class='list-unstyled  flex-item pointer-active'>
                    <img

                        src={myImage0}
                        alt="1" />
                </li>

                <li className={isStep1Active ? "pointer-active" : ''} class='list-unstyled  flex-item'>
                    <img src={myImage1} onClick={firstStep}
                        alt='2' />
                </li>

                <li className={isStep2Active ? "pointer-active" : ''} class='list-unstyled flex-item'>
                    <img onClick={secondStep}
                        src={myImage2}
                        alt="3" />
                </li>
                <li className={isStep3Active && !isStep0Active ? "pointer-active" : ''} class='list-unstyled  flex-item'>
                    <img onClick={thirdStep}
                        src={myImage3}
                        alt='4' />
                </li>

                <li className={isStep4Active ? "pointer-active" : ''} class='list-unstyled  flex-item'>
                    <img onClick={fourthStep}
                        src={myImage4}
                        alt='5' />
                </li>

            </ul>
        </Fragment>

    );

}
export default BottomPointers;
