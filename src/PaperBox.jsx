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

                const frequencySecond = p.random(20, 30)
                const colorSecond = p.color(10, 126, 255, frequencySecond)
                p.push()
                p.fill(colorSecond).translate(0, 0, -50 - frequencySecond).plane(200, 200)
                p.pop()
                p.push()
                p.rotateX(90).fill(colorSecond).translate(0, 50, -100 - frequencySecond).plane(200, 200)
                p.pop()
                p.push()
                p.rotateX(90).fill(colorSecond).translate(0, 50, 100 + frequencySecond).plane(200, 200)
                p.pop()
                p.push()
                p.rotateY(90).fill(colorSecond).translate(-50, 0, 100 + frequencySecond).plane(200, 200)
                p.pop()
                p.push()
                p.rotateY(90).fill(colorSecond).translate(-50, 0, -100 - frequencySecond).plane(200, 200)
                p.pop()
                p.push()
                p.fill(colorSecond).translate(0, 0, 150 + frequencySecond).plane(200, 200)
                p.pop()

                const frequencyThird = p.random(90, 100)
                const colorThird = p.color(10, 126, 255, frequencyThird)
                p.push()
                p.fill(colorThird).translate(0, 0, -50 - frequencyThird).plane(200, 200)
                p.pop()
                p.push()
                p.rotateX(90).fill(colorThird).translate(0, 50, -100 - frequencyThird).plane(200, 200)
                p.pop()
                p.push()
                p.rotateX(90).fill(colorThird).translate(0, 50, 100 + frequencyThird).plane(200, 200)
                p.pop()
                p.push()
                p.rotateY(90).fill(colorThird).translate(-50, 0, 100 + frequencyThird).plane(200, 200)
                p.pop()
                p.push()
                p.rotateY(90).fill(colorThird).translate(-50, 0, -100 - frequencyThird).plane(200, 200)
                p.pop()
                p.push()
                p.fill(colorThird).translate(0, 0, 150 + frequencyThird).plane(200, 200)
                p.pop()
            }
        }} />
    )
}
