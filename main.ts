function lightSpace (Space: string, Effect: string) {
    if (Space == "A") {
        if (Effect == "Step") {
            stripA1.showColor(Connected.colors(Connected.NeoPixelColors.White))
            stripA2.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripA1.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
            stripA2.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripA1.showColor(Connected.colors(Connected.NeoPixelColors.Black))
            stripA2.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "B") {
        if (Effect == "Step") {
            stripB.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripB.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripB.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "C") {
        if (Effect == "Step") {
            stripC.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripC.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripC.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "D") {
        if (Effect == "Step") {
            stripD.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripD.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripD.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "E") {
        if (Effect == "Step") {
            stripE.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripE.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripE.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "F") {
        if (Effect == "Step") {
            stripF.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripF.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripF.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "G") {
        if (Effect == "Step") {
            stripG.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripG.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripG.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "H") {
        if (Effect == "Step") {
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripH.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    } else if (Space == "I") {
        if (Effect == "Step") {
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.White))
        } else if (Effect == "Indicate") {
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.Yellow))
        } else if (Effect == "Off") {
            stripI.showColor(Connected.colors(Connected.NeoPixelColors.Black))
        }
    }
}
function startMaze () {
    lightSpace("A", "Step")
    lightSpace("B", "Indicate")
    lightSpace("C", "Indicate")
    lightSpace("H", "Off")
    lightSpace("I", "Off")
    awaitingStep = true
    basic.pause(300)
    while (awaitingStep) {
        basic.pause(20)
        laserR = pins.analogReadPin(AnalogPin.P0)
        laserC = pins.analogReadPin(AnalogPin.P1)
        laserL = pins.analogReadPin(AnalogPin.P2)
        if (laserR < 5) {
            OLED.writeStringNewLine("First Step was C")
            firstStep = "C"
            lightSpace("A", "Off")
            lightSpace("B", "Off")
            lightSpace("C", "Step")
            lightSpace("E", "Indicate")
            awaitingStep = false
        } else if (laserL > 150) {
            firstStep = "B"
            OLED.writeStringNewLine("First Step was B")
            lightSpace("A", "Off")
            lightSpace("C", "Off")
            lightSpace("B", "Step")
            lightSpace("D", "Indicate")
            awaitingStep = false
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (firstStep == "B") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Second Step was D")
                secondStep = "D"
                lightSpace("B", "Off")
                lightSpace("D", "Step")
                lightSpace("E", "Indicate")
                lightSpace("F", "Indicate")
                awaitingStep = false
            }
        }
    } else if (firstStep == "C") {
        while (awaitingStep) {
            basic.pause(30)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserL > 150) {
                OLED.writeStringNewLine("Second Step was E")
                secondStep = "E"
                lightSpace("C", "Off")
                lightSpace("E", "Step")
                lightSpace("D", "Indicate")
                lightSpace("G", "Indicate")
                awaitingStep = false
            }
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (secondStep == "D") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Thrid Step was F")
                thirdStep = "F"
                lightSpace("D", "Off")
                lightSpace("E", "Off")
                lightSpace("F", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            } else if (laserC > 150) {
                OLED.writeStringNewLine("Thrid Step was E")
                thirdStep = "E"
                lightSpace("D", "Off")
                lightSpace("F", "Off")
                lightSpace("E", "Step")
                lightSpace("G", "Indicate")
                awaitingStep = false
            }
        }
    } else if (secondStep == "E") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserC > 150) {
                OLED.writeStringNewLine("Thrid Step was D")
                thirdStep = "D"
                lightSpace("E", "Off")
                lightSpace("G", "Off")
                lightSpace("D", "Step")
                lightSpace("F", "Indicate")
                awaitingStep = false
            } else if (laserL > 150) {
                OLED.writeStringNewLine("Third Step was G")
                thirdStep = "G"
                lightSpace("D", "Off")
                lightSpace("E", "Off")
                lightSpace("G", "Step")
                lightSpace("I", "Indicate")
                awaitingStep = false
            }
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (thirdStep == "F") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserL > 150) {
                OLED.writeStringNewLine("Fourth Step was H")
                fourthStep = "H"
                lightSpace("D", "Off")
                lightSpace("F", "Off")
                lightSpace("H", "Step")
                lightSpace("I", "Indicate")
                awaitingStep = false
            }
        }
    } else if (thirdStep == "E") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserL > 150) {
                OLED.writeStringNewLine("Fourth Step was G")
                fourthStep = "G"
                lightSpace("E", "Off")
                lightSpace("F", "Off")
                lightSpace("G", "Step")
                lightSpace("I", "Indicate")
                awaitingStep = false
            }
        }
    } else if (thirdStep == "D") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Fourth Step was F")
                fourthStep = "F"
                lightSpace("D", "Off")
                lightSpace("F", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            }
        }
    } else if (thirdStep == "G") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Fourth Step was I")
                fourthStep = "I"
                lightSpace("G", "Off")
                lightSpace("I", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            }
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (fourthStep == "H") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserC > 150) {
                OLED.writeStringNewLine("Fifth Step was I")
                fifthStep = "I"
                lightSpace("H", "Off")
                lightSpace("I", "Step")
                awaitingStep = false
            } else if (laserL > 150) {
                awaitingStep = false
            }
        }
    } else if (fourthStep == "G") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR < 5) {
                OLED.writeStringNewLine("Fifth Step was I")
                fifthStep = "I"
                lightSpace("G", "Off")
                lightSpace("I", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            }
        }
    } else if (fourthStep == "F") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserL > 150) {
                OLED.writeStringNewLine("Fifth Step was H")
                fifthStep = "H"
                lightSpace("F", "Off")
                lightSpace("H", "Step")
                lightSpace("I", "Indicate")
                awaitingStep = false
            }
        }
    } else if (fourthStep == "I") {
        while (awaitingStep) {
            basic.pause(20)
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserC > 150) {
                OLED.writeStringNewLine("Fifth Step was H")
                fifthStep = "H"
                lightSpace("I", "Off")
                lightSpace("H", "Step")
                awaitingStep = false
            }
        }
    }
    basic.pause(300)
    awaitingStep = true
    if (fifthStep == "I") {
        if (!(fourthStep == "H")) {
            while (awaitingStep) {
                basic.pause(20)
                laserR = pins.analogReadPin(AnalogPin.P0)
                laserC = pins.analogReadPin(AnalogPin.P1)
                laserL = pins.analogReadPin(AnalogPin.P2)
                if (laserC > 150) {
                    OLED.writeStringNewLine("Sixth Step was H")
                    sixthStep = "H"
                    lightSpace("I", "Off")
                    lightSpace("H", "Step")
                    awaitingStep = false
                }
            }
        }
    } else if (fifthStep == "H") {
        if (!(fourthStep == "I")) {
            while (awaitingStep) {
                basic.pause(20)
                laserR = pins.analogReadPin(AnalogPin.P0)
                laserC = pins.analogReadPin(AnalogPin.P1)
                laserL = pins.analogReadPin(AnalogPin.P2)
                if (laserC > 150) {
                    OLED.writeStringNewLine("Sixth Step was I")
                    sixthStep = "I"
                    lightSpace("H", "Off")
                    lightSpace("I", "Step")
                    awaitingStep = false
                }
            }
        }
    }
}
let sixthStep = ""
let fifthStep = ""
let fourthStep = ""
let thirdStep = ""
let secondStep = ""
let firstStep = ""
let laserL = 0
let laserC = 0
let laserR = 0
let awaitingStep = false
let stripI: Connected.Strip = null
let stripH: Connected.Strip = null
let stripG: Connected.Strip = null
let stripF: Connected.Strip = null
let stripE: Connected.Strip = null
let stripD: Connected.Strip = null
let stripC: Connected.Strip = null
let stripB: Connected.Strip = null
let stripA2: Connected.Strip = null
let stripA1: Connected.Strip = null
let lightsAreSet = false
led.enable(false)
pins.setAudioPinEnabled(false)
OLED.init(128, 64)
OLED.writeStringNewLine("barf")
pins.digitalWritePin(DigitalPin.P5, 1)
pins.digitalWritePin(DigitalPin.P9, 1)
let strip = Connected.create(Connected.DigitalRJPin.O13, 20, Connected.NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.setBrightness(100)
basic.pause(5000)
let strip2 = Connected.create(Connected.DigitalRJPin.W15, 10, Connected.NeoPixelMode.RGB)
strip.setBrightness(5)
strip2.setBrightness(5)
stripA1 = strip2.range(8, 2)
stripA2 = strip.range(8, 2)
stripB = strip2.range(6, 2)
stripC = strip.range(6, 2)
stripD = strip2.range(4, 2)
stripE = strip.range(4, 2)
stripF = strip2.range(2, 2)
stripG = strip.range(2, 2)
stripH = strip2.range(0, 2)
stripI = strip.range(0, 2)
for (let index = 0; index < 1; index++) {
    Kong.setServoAngel(Kong.ServoList.S0, 45)
    Kong.ksetMotorSpeed(Kong.MotorList.M1, 10)
    basic.pause(5000)
    Kong.setServoAngel(Kong.ServoList.S0, 118)
    Kong.ksetMotorSpeed(Kong.MotorList.M1, 0)
    basic.pause(1000)
}
for (let index = 0; index < 4; index++) {
    OLED.clear()
    startMaze()
    for (let index = 0; index < 1; index++) {
        pins.servoWritePin(AnalogPin.P8, 40)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P8, 135)
        basic.pause(1000)
    }
}
basic.forever(function () {
	
})
