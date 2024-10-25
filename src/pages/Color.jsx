import { useState } from 'react';
import {Message} from '../component/Message';
import  {Button} from '../component/Button';

export const Color = () => {

    const [cc,setcc] = useState("#FFFFFF"); 

    const generate = () => {
        let color = "123456789ABCDEF";
        let colorhex = "#";
         for(let i = 0; i < 6; i++) {
            let random = parseInt(Math.random()*16);
            colorhex = colorhex + color.charAt(random);
         }
         return colorhex;
    }

    const change = () => {                // event handler function to be passed as props
        setcc(generate());
        // console.log("Color changed", cc);
    } 
   
    return (
        <div >
            <Message he = {cc} /> {/* component should be in capital letter */}
            <Button fn = {change} /> {/* Event binding - handle user action and props */}
        </div>
    ); 
};