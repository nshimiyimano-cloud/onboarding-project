import React from "react";
import { useSelector } from "react-redux";

function Form() {

    const btnMsg = useSelector(state => state.btnMsg);
    const isStep1Active = useSelector(state => state.isStep1Active);
    const isStep2Active = useSelector(state => state.isStep2Active);
    const isStep3Active = useSelector(state => state.isStep3Active);
    const isStep4Active = useSelector(state => state.isStep4Active);

    return (
        <>
            <div id="fmContainer" className="form-container container">
                <form action="">
                    {isStep1Active &&
                        <div id="namesForm" className="fm-inner stepwith-names">
                            <div className="form-group">
                                <div className="m-3"> <label htmlFor="fullName">Full Name</label></div>
                                <div><input type="text" className="form-control"
                                    id="fullName" placeholder="Steve jobs" /></div>
                            </div>

                            <div className="form-group">
                                <div className="m-3"><label htmlFor="fullName">Display Name</label></div>
                                <div><input type="text" className="form-control"
                                    id="displayName" placeholder="Steve" />
                                </div>
                            </div>
                        </div>}



                    {isStep2Active &&
                        <div className="fm-inner stepwith-wirkspacename">
                            <div className="form-group  ">
                                <div className="m-3"> <label htmlFor="fullName">Workspace Name</label></div>
                                <div><input type="text" className="form-control"
                                    id="fullName" placeholder="Full name" /></div>
                            </div>

                            <div className="form-group">
                                <div className="m-3"><label htmlFor="fullName">Display Url(optinal)</label></div>
                                <div><input type="text" className="form-control"
                                    id="displayName" placeholder="Displayname" /></div>
                            </div>

                        </div>}


                    {isStep3Active &&
                        <div id="workspaceCard" class="fm-inner"> {/* class="fm-inner d-flex row justify-content-between stepwith-workspacename" */}

                            <div className="card border" style={{ paddingTop: 10, paddingLeft: 10 }}>
                                <div className="card-img-top ml-3"><i className="fa fa-user"></i></div>
                                <div className="card-body text-center">
                                    <h4 className="card-title">For myself</h4>
                                    <p className="card-text">

                                        White better.Think more clearly.stay organized
                                    </p>
                                </div>
                            </div>


                            <div className="card" style={{ paddingTop: 10, paddingLeft: 10 }}>
                                <div className="card-img-top ml-3"><i className="fa fa-users"></i></div>
                                <div className="card-body text-center">
                                    <h4 className="card-title">For my team</h4>
                                    <p className="card-text">

                                        Wikis, docs, tasks & projects, all in one place.
                                    </p>
                                </div>
                            </div>

                        </div>}

                    {isStep4Active &&
                        <div id="arrDownFinal" class="dispayatlast-phase text-center mt-5 mb-5" >
                            <i style={{ width: "60px", fontSize: "35px", padding: "10px", borderRadius: "70%" }} className="fa fa-chevron-down bg-primary  text-light text-center"></i>


                        </div>}

                    <div className="input-group m-3">
                        <button className="btn btn-primary">{btnMsg}</button>
                    </div>

                </form>


            </div>
        </>
    );

}


export default Form;