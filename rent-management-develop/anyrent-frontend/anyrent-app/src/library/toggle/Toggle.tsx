import React from "react";
import { FC,  useState, useEffect} from "react";
import "./toggle.less";

export interface IRToggleProps {
    toggled: boolean;
    onChange?: Function;
}

export const ARToggle: FC<IRToggleProps> = ({toggled, onChange}) => {
    const [toggle, setToggle] = useState(toggled);
    useEffect(()=>{
        setToggle(!toggle);
    }, [toggled]);
    return (
        <div className={`ar-toggle${toggle? " toggled": "" }`} onClick={()=> setToggle(!toggle)}>
            <div className="ar-toggle__notch"></div>
        </div>
    );
};

export default ARToggle;
