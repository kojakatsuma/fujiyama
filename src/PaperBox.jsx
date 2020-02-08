import React from 'react'
import { P5 } from './P5';

export const PaperBox = () => {
    return (
        <P5 sketch={(p) => {
            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
                p.noStroke()
                p.colorMode(p.HSB, 255);
                p.blendMode(p.LIGHTEST);
                p.angleMode(p.DEGREES)
                p.frameRate(24)
              
            }
            p.draw = () => {
                p.noCursor()
                p.directionalLight(0, 126, 255, 20, 0, 200);
                p.directionalLight(0, 126, 255, 20, -10, -100);
                p.clear()
                const frequency = p.random(0, 10)
                p.rotateX(-30).rotateY(-20)
                const color = p.color(10, 126, 255, 100 + frequency)
                p.push()
                p.fill(color).translate(0, 0, -50 - frequency).plane(200, 200)
                p.pop()
                p.push()
                p.rotateX(90).fill(color).translate(0, 50, -100 - frequency).plane(200, 200)
                p.pop()
                p.push()
                p.rotateX(90).fill(color).translate(0, 50, 100 + frequency).plane(200, 200)
                p.pop()
                p.push()
                p.rotateY(90).fill(color).translate(-50, 0, 100 + frequency).plane(200, 200)
                p.pop()
                p.push()
                p.rotateY(90).fill(color).translate(-50, 0, -100 - frequency).plane(200, 200)
                p.pop()
                p.push()
                p.fill(color).translate(0, 0, 150 + frequency).plane(200, 200)
                p.pop()
            }
        }} />
    )
}
