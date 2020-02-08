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
                p.frameRate(20)
            }
            p.draw = () => {
                p.directionalLight(0, 126, 255, 20, 0, 200);
                p.directionalLight(0, 126, 255, -20, 0, -50);
                const color = p.color(0, 126, 255)
                p.clear()
                p.rotateX(-30)
                p.push()
                p.fill(color).translate(0, 0, 0).plane(100, 100)
                p.pop()
                p.push()
                p.rotateX(90).fill(color).translate(0, 50, -50).plane(100, 100)
                p.pop()
                p.push()
                p.rotateX(90).fill(color).translate(0, 50, 50).plane(100, 100)
                p.pop()
                p.push()
                p.rotateY(90).fill(color).translate(-50, 0, 50).plane(100, 100)
                p.pop()
                p.push()
                p.rotateY(90).fill(color).translate(-50, 0, -50).plane(100, 100)
                p.pop()
                p.push()
                p.fill(color).translate(0, 0, 100).plane(100, 100)
                p.pop()
            }
        }} />
    )
}
