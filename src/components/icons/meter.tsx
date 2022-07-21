import React from "react";

import {
  lightBlue, darkBlue, red,
  yellow, green, charcoal } from "../../colors";

const kWidth = 850;
const kHeight = 850;


const rotationString = (normalValue: number):string => {
  const valueAngle = -90 + (normalValue * 180);
  const originX = kWidth / 2;
  const originY = kHeight / 2;
  return `rotate(${valueAngle}, ${originX}, ${originY})`;
};

interface meterProps {
  value: number; // 0 -> 1
  size: string;
}

export const Meter = (props: meterProps) => {
  const {value, size} = props;
  const rotateString = rotationString(value);
  return(
    <svg
      width={size}
      height={size}
      viewBox="0 0 850 850"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule:"evenodd",
        clipRule:"evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit:2
      }}>
      <g id="meter-and-needle">
        <g id="meter">
          <path
            d="M424.512,830.024c0,0 0,0 0,0Zm-405.512,-405.512c0,-223.808 181.704,-405.512 405.512,-405.512c223.808,0 405.512,181.704 405.512,405.512l-202.756,0c0,-111.904 -90.852,-202.756 -202.756,-202.756c-111.904,0 -202.756,90.852 -202.756,202.756l-202.756,0Z"
            style={{fill: lightBlue}} />
          <path
            d="M424.512,849.024c0,0 0,0 0,0Zm0,0c0,0 0,0 0,0Zm-424.512,-424.512c0,10.493 8.507,19 19,19l202.756,0c10.493,0 19,-8.507 19,-19c0,-101.418 82.338,-183.756 183.756,-183.756c101.418,0 183.756,82.338 183.756,183.756c0,10.493 8.507,19 19,19l202.756,0c10.494,0 19,-8.507 19,-19c0,-234.295 -190.217,-424.512 -424.512,-424.512c-234.295,0 -424.512,190.217 -424.512,424.512Zm38.46,-19c9.92,-204.511 179.101,-367.512 386.052,-367.512c206.952,0 376.133,163.001 386.052,367.512c0,0 -165.1,0 -165.1,0c-9.651,-113.511 -104.961,-202.756 -220.952,-202.756c-115.99,0 -211.301,89.245 -220.952,202.756c0,0 -165.1,0 -165.1,0l-0,0Z"
            style={{fill: darkBlue}} />
          <g>
            <path
              d="M537.245,256.001l121.813,-162.24c116.381,84.723 168.479,197.076 170.966,330.751l-202.756,0c1.198,-72.342 -32.968,-126.358 -90.023,-168.511Z"
              style={{fill: red}} />
            <path
              d="M536.445,255.401c-0.16,0.213 -0.228,0.481 -0.19,0.745c0.039,0.264 0.181,0.501 0.395,0.66c56.783,41.951 90.81,95.694 89.618,167.69c-0.004,0.268 0.099,0.526 0.287,0.717c0.188,0.191 0.445,0.299 0.713,0.299l202.756,0c0.269,0 0.526,-0.108 0.714,-0.299c0.188,-0.192 0.291,-0.451 0.286,-0.72c-2.493,-133.994 -54.718,-246.614 -171.378,-331.541c-0.442,-0.322 -1.06,-0.229 -1.388,0.208l-121.813,162.241Zm0.8,0.6l121.813,-162.24c116.381,84.723 168.479,197.076 170.966,330.751l-202.756,0c1.198,-72.342 -32.968,-126.358 -90.023,-168.511Z"
              style={{fill: darkBlue}} />
            <path
              d="M221.756,424.512c-0.546,-23.355 3.327,-44.475 10.329,-64.012l-192.488,-63.83c-11.161,35.828 -19.106,79.606 -20.597,127.842l202.756,0Z"
              style={{fill: green}} />
            <path
              d="M221.756,425.512c0.269,0 0.527,-0.109 0.715,-0.301c0.189,-0.193 0.291,-0.453 0.285,-0.722c-0.543,-23.223 3.307,-44.224 10.27,-63.652c0.091,-0.253 0.076,-0.533 -0.042,-0.775c-0.118,-0.242 -0.329,-0.426 -0.585,-0.511l-192.487,-63.831c-0.255,-0.084 -0.533,-0.063 -0.772,0.06c-0.239,0.123 -0.418,0.336 -0.498,0.592c-11.184,35.903 -19.147,79.772 -20.642,128.109c-0.008,0.271 0.094,0.533 0.282,0.727c0.188,0.194 0.447,0.304 0.718,0.304l202.756,0Zm0,-1c-0.546,-23.355 3.327,-44.475 10.329,-64.012l-192.488,-63.83c-11.161,35.828 -19.106,79.606 -20.597,127.842l202.756,0Z"
              style={{fill: darkBlue}} />
            <path
              d="M232.085,360.5l-192.488,-63.83c97.817,-282.124 409.087,-346.381 619.461,-202.909l-121.813,162.24c-123.32,-79.141 -268.416,-12.707 -305.16,104.499Z"
              style={{fill: yellow}} />
            <path
              d="M230.039,366.67c1.654,0.548 3.458,0.41 5.009,-0.385c1.551,-0.794 2.718,-2.178 3.239,-3.84c35.568,-113.452 176.077,-177.58 295.447,-100.973c2.865,1.839 6.664,1.155 8.709,-1.568l121.813,-162.241c1.065,-1.419 1.504,-3.213 1.214,-4.964c-0.29,-1.752 -1.284,-3.308 -2.75,-4.309c-213.706,-145.744 -529.898,-80.442 -629.265,206.15c-0.569,1.644 -0.457,3.447 0.313,5.006c0.77,1.56 2.132,2.746 3.783,3.293l192.488,63.831Zm2.046,-6.17l-192.488,-63.83c97.817,-282.124 409.087,-346.381 619.461,-202.909l-121.813,162.24c-123.32,-79.141 -268.416,-12.707 -305.16,104.499Z"
              style={{ fill: darkBlue}} />
          </g>
        </g>
        <g id="needle" transform={rotateString}>
          <circle cx="420.817" cy="416.585" r="405.512" style={{fill:"none"}} />
          <circle cx="422.512" cy="424.512" r="46.561" style={{fill: lightBlue}} />
          <path
            d="M422.512,358.951c-36.184,0 -65.561,29.377 -65.561,65.561c0,36.184 29.377,65.561 65.561,65.561c36.184,-0 65.561,-29.377 65.561,-65.561c-0,-36.184 -29.377,-65.561 -65.561,-65.561Zm0,19c25.698,0 46.561,20.864 46.561,46.561c-0,25.698 -20.863,46.561 -46.561,46.561c-25.697,-0 -46.561,-20.863 -46.561,-46.561c0,-25.697 20.864,-46.561 46.561,-46.561Z"
            style={{fill: lightBlue}} />
          <path
            d="M398.866,154.018c0,-0 -18.634,0.254 -31.182,0.425c-2.078,0.028 -3.99,-1.133 -4.923,-2.99c-0.934,-1.857 -0.725,-4.083 0.537,-5.734c12.871,-16.835 40.56,-53.054 51.982,-67.994c1.22,-1.596 3.109,-2.538 5.118,-2.554c2.009,-0.016 3.912,0.898 5.157,2.475c11.541,14.619 39.362,49.861 52.652,66.695c1.368,1.733 1.632,4.094 0.679,6.086c-0.952,1.993 -2.955,3.27 -5.163,3.294c-11.686,0.124 -27.857,0.297 -27.857,0.297l-3,-0l3,261.573c0,9.709 -12.185,17.591 -23.5,17.591c-11.314,-0 -23.5,-7.882 -23.5,-17.591l0,-261.573Z"
            style={{fill: charcoal }} />
        </g>
      </g>
    </svg>

  );
};

