
import React from 'react';

const DEFAULT_ROOM_SIZE: number = 250;


function Room(id: string, image: string) {
    return (
        <img 
	    height={DEFAULT_ROOM_SIZE}
	    width={DEFAULT_ROOM_SIZE}
	    src={image}
	    id={id}
	/>
    )
}

export default function House() {
    const house: (string | string | string)[][][] = [
        [["/about", "About Room."]],
    ];
    return (
        <div className="w-full h-full">
	    House.
        </div>
    );
}