import React from "react";
import './Heart.scss';

export class Heart extends React.Component<any,any>
{
    render()
    {
        return <>
        <svg className="heart-loader" viewBox="0 0 90 90" version="1.1">
  <g className="heart-loader__group">
    <path className="heart-loader__square" stroke-width="1" fill="none" d="M0,30 0,90 60,90 60,30z"/>
    <path className="heart-loader__circle m--left" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
    <path className="heart-loader__circle m--right" stroke-width="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
    <path className="heart-loader__heartPath" stroke-width="2" d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0" />
  </g>
</svg>
        </>
    }
}