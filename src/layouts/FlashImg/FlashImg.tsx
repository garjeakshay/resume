import React from "react";
import robot from "../../img/robot.svg";

export class FlashImg extends React.Component<any, any>
{
    render()
    {
        return <>    
        <iframe src={robot} style={{borderWidth:'0px', height:'40vmin',width:'100%'}}></iframe>
        </>
    }
}
