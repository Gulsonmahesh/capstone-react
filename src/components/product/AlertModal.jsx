import React, { Fragment } from 'react';

const AlertModal = (props) => {
    return (
        <Fragment>
            <div className="modal d-block" tabIndex="-1" role="dialog" data-test='modal'>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-body">
                        <p>{props.message}</p>
                    </div>
                    <div className="modal-footer">
                        {props.loginStatus && <button type="button" className="btn btn-primary" onClick={props.gotologin}>Go to Login</button>}
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}>Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AlertModal;
