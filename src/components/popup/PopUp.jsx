
import React from 'react'
import { DeleteForever } from "@material-ui/icons";
import './popup.css';
function PopUp() {
    return (
        <div className="popup">
            <div className="popupWrapper">
                <ul className="popuplists">
                    <li className="popuplist">
                        <div className="poplistelement">
                                <DeleteForever className="popuplistLeft" />
                                <span className="popuplistRightTitle">Delete Ad <p className="popuplistRightDesc">Nvere see this as again</p></span>  
                        </div>
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}

export default PopUp


