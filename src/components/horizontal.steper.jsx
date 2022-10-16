

import { useSelector, useDispatch} from "react-redux";
import { action } from "./store";







function HorizontalStepper(){
  const dispatch= useDispatch();

  let lineWidth=useSelector(state=>state.stepperLineWidth);

 const isStep1Active= useSelector(state=>state.isStep1Active);
 const isStep2Active= useSelector(state=>state.isStep2Active);
 const isStep3Active= useSelector(state=>state.isStep3Active);
 const isStep4Active= useSelector(state=>state.isStep4Active);


 const isDot1= useSelector(state=>state.isDot1);
 const isDot2= useSelector(state=>state.isdot2);
 const isDot3= useSelector(state=>state.isDot3);
 const isDot4= useSelector(state=>state.isDot4);

if(isStep1Active === true){
  dispatch(action.changeDot1(true));
}
if(isStep2Active === true){
   dispatch(action.changeDot1(true));
  dispatch(action.changeDot2(true));
 
}


if(isStep3Active === true){
  dispatch(action.changeDot1(true));
  dispatch(action.changeDot2(true));
  dispatch(action.changeDot3(true));
 
}

if(isStep4Active === true){
  dispatch(action.changeDot1(true));
  dispatch(action.changeDot2(true));
  dispatch(action.changeDot3(true));
  dispatch(action.changeDot4(true))
}




    
    return (

      <div className="step-container "> 
        <span className="stepper-line" style={{width:lineWidth+'%'}}></span>
    <ul className="stepper list-unstyled row mt-5 mb-5">
      <li className="col-3">
        <a href="#!" >
          {  isDot1 ? <span className='circle active'>1</span> : <span  className='circle'>1</span>  }          
        </a>
       {/*  <div className="linebetween" ></div> */}
      </li>

      
      <li className="col-3">
        <a href="#!">
        {  isDot2 ? <span className='circle active'>2</span> : <span  className='circle'>2</span>  }  
        </a>
      </li>

      
      <li className="rounded col-3">
        <a href="#!">
        { isDot3 ? <span className='circle active'>3</span> :<span  className='circle'>3</span>  }
        </a>
      </li>


      <li className=" col-3">
        <a href="#!">
        { isDot4 ?  <span className='circle active'>4</span> :<span  className='circle'>4</span>  }
        </a>
      </li>

    </ul>
    </div>
    
);


   }
  
  


export default HorizontalStepper;