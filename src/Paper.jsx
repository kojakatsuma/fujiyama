import React, { useRef, useEffect } from 'react'
import p5 from 'p5';
import { Riso, drawRiso } from './p5.riso';

let blue, red, yellow;

/**
 *
 *
 * @param {p5} p
 */
const sketch = (p) => {
    p.setup = () => {
        p.pixelDensity(1)
        p.createCanvas(8.5 * 150, 11 * 150);
        // create 3 riso layers
        yellow = new Riso('yellow');
        blue = new Riso('blue');
        red = new Riso('red');
    }
    p.draw = () => {
        let s = 100;
        p.background(255);

        blue.noStroke();
        red.noStroke();
        yellow.noStroke();

        for (let x = 140; x < p.width - 140; x = x + 140) {
            for (let y = 140; y < p.height - 140; y = y + 140) {
                blue.fill(p.map(y, 0, p.height, 20, 220));
                blue.ellipse(
                    x + p.random(-20, 20),
                    y + p.random(-20, 20),
                    s + p.random(-20, 20),
                    s + p.random(-20, 20)
                );
                red.fill(p.map(x, 0, p.width, 20, 220));
                red.ellipse(
                    x + p.random(-20, 20),
                    y + p.random(-20, 20),
                    s + p.random(-20, 20),
                    s + p.random(-20, 20)
                );
                yellow.fill(p.map(x, 0, p.width, 220, 20));
                yellow.ellipse(
                    x + p.random(-20, 20),
                    y + p.random(-20, 20),
                    s + p.random(-20, 20),
                    s + p.random(-20, 20)
                );
            }
        }

        // make a small text graphic and cut it out of the image
        let textGraphic = p.createGraphics(p.width, p.height);
        textGraphic.fill(0);
        textGraphic.textStyle(p.BOLD);
        textGraphic.textFont('Helvetica');
        textGraphic.textAlign(p.CENTER, p.CENTER);
        textGraphic.textSize(20);
        textGraphic.text("ABOLISH", p.mouseX, p.mouseY);

        red.cutout(textGraphic);
        blue.cutout(textGraphic);
        yellow.cutout(textGraphic);

        drawRiso()
    }
}

export const Paper = () => {

    const ref = useRef(null)
    useEffect(() => {
        new p5(sketch, ref.current)
    })
    return (
        <div ref={ref}></div>
    )
}
