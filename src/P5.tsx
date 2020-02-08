import React, { useRef, useEffect } from 'react';
import p5 from 'p5'

export const P5 = ({ sketch }: { sketch: (p: p5) => {} }) => {
     const target = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (target.current) {
            new p5(sketch, target.current)
        }
    })
    return (
        <div ref={target} />

    )
}

