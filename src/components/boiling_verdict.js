import React from 'react';

export default function BoilingVerdict ({temparature}) {

    if(temparature>= 100) {
        return <p>The water has reached its boiling point</p>
    }
     else {
         return <p>The water has not yet reached the boiling point</p>
     }
}