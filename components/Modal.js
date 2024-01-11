import React from "react";

export default function Modal({visible, onClose, children}) {
    if (!visible) return null;
    if (visible) {
    } 
    
 
    const handleClose = (e) => {
        if(e.target.id === 'container') onClose();
    }

    return (
        <>
        <div id='container' onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-20 rounded ">
            <button onClick={onClose} className=" ml-[100%]">x</button>
            {children}
            </div>
        </div>
        </>
    )
}