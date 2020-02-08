import React, { useRef, useEffect } from 'react'
import p5 from 'p5';


/**
 *
 *
 * @param {p5} p
 */
const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.colorMode(p.HSB, 255);
        p.blendMode(p.LIGHTEST);
        p.noStroke()
        p.noCursor()
        p.frameRate(10)
    }
    p.draw = () => {
        p.clear()
        for (let index = 0; index < 100 * p.random(0.2, 15); index++) {
            p.fill(p.color(p.random(), 126 * p.random(), 255 * p.random()))
            p.rect((p.windowWidth - 200) * p.random(), (p.windowHeight - 200) * p.random(), 200 * p.random(), 200 * p.random())
        }
    }
}

export const Paper = () => {

    const ref = useRef(null)
    useEffect(() => {
        new p5(sketch, ref.current)
    })
    return (
        <span ref={ref}></span>
    )
}
