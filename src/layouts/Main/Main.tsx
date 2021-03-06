import React from "react";
import { FlashImg } from "../FlashImg/FlashImg";
import { Heart } from "../Heart/Heart";


export class Main extends React.Component<any, any>
{
    render()
    {
        return <>    
        <FlashImg></FlashImg>
        <Heart></Heart>
        </>
    }
}
