import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

/**
 *
 *
 * @param {p5} p
 */
const sketch = (p) => {
    let A = 100
    let drop = 0
    let letsDrop = false
    let diffusion = 0
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        p.noStroke()
    }
    p.mousePressed = () => {
        if(letsDrop){
            drop = 0;
            letsDrop = !letsDrop
            diffusion = 0;
            return;
        }
        letsDrop = !letsDrop;
    }
    p.draw = () => {
        p.background(200,100,100)
        if (letsDrop) {
            drop += 20
        }
        diffusion += 10
        p.lights()
        for (let t = -p.windowHeight / 2; t < p.windowHeight / 2; t += 5) {
            if ((t + drop) > p.windowHeight / 2) {
                break;
            }
            p.push()
            p.translate(A * p.sin(p.TWO_PI * t / 200), -t + drop * p.random(), p.random(diffusion * 0.1)).fill(40, 150, 255, 255).sphere(10)
            p.pop()
            p.push()
            p.translate(A * p.sin(p.TWO_PI * t / 200), t + (drop) * p.random(), p.random(diffusion * 0.1)).fill(255, 255, 255, 255).sphere(10)
            p.pop()
        }
    }
}

export default () => {
    const target = useRef(null)
    useEffect(() => {
        new p5(sketch, target.current)
    }, [])
    return (
        <div ref={target} />
    )
}