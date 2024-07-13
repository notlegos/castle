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
// sixth step was I
// sixth step was H
function startMaze () {
    lightSpace("A", "Step")
    lightSpace("B", "Indicate")
    lightSpace("C", "Indicate")
    awaitingStep = true
    OLED.writeStringNewLine("Awaiting First Step")
    basic.pause(1000)
    while (awaitingStep) {
        laserR = pins.analogReadPin(AnalogPin.P0)
        laserC = pins.analogReadPin(AnalogPin.P1)
        laserL = pins.analogReadPin(AnalogPin.P2)
        if (laserR > 150) {
            OLED.writeStringNewLine("First Step was C")
            firstStep = "C"
            OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
            lightSpace("A", "Off")
            lightSpace("B", "Off")
            lightSpace("C", "Step")
            lightSpace("E", "Indicate")
            awaitingStep = false
        } else if (laserC > 150) {
            OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
        } else if (laserL > 150) {
            firstStep = "B"
            OLED.writeStringNewLine("First Step was B")
            OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
            lightSpace("A", "Off")
            lightSpace("C", "Off")
            lightSpace("B", "Step")
            lightSpace("D", "Indicate")
            awaitingStep = false
        }
    }
    basic.pause(1000)
    awaitingStep = true
    OLED.writeStringNewLine("Awaiting Second Step")
    if (firstStep == "B") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
                OLED.writeStringNewLine("Second Step was D")
                secondStep = "D"
                lightSpace("B", "Off")
                lightSpace("D", "Step")
                lightSpace("E", "Indicate")
                lightSpace("F", "Indicate")
                awaitingStep = false
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
            }
        }
    } else if (firstStep == "C") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
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
    basic.pause(1000)
    awaitingStep = true
    OLED.writeStringNewLine("Awaiting Third Step")
    if (secondStep == "D") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
                OLED.writeStringNewLine("Thrid Step was F")
                thirdStep = "F"
                lightSpace("D", "Off")
                lightSpace("E", "Off")
                lightSpace("F", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
                OLED.writeStringNewLine("Thrid Step was E")
                thirdStep = "E"
                lightSpace("D", "Off")
                lightSpace("F", "Off")
                lightSpace("E", "Step")
                lightSpace("G", "Indicate")
                awaitingStep = false
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
            }
        }
    } else if (secondStep == "E") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
                OLED.writeStringNewLine("Thrid Step was D")
                thirdStep = "D"
                lightSpace("E", "Off")
                lightSpace("G", "Off")
                lightSpace("D", "Step")
                lightSpace("F", "Indicate")
                awaitingStep = false
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
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
    basic.pause(1000)
    awaitingStep = true
    OLED.writeStringNewLine("Awaiting Fourth Step")
    // third step was F
    // third step was E
    // third step was D
    // third step was G
    if (thirdStep == "F") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
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
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
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
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
                OLED.writeStringNewLine("Fourth Step was F")
                fourthStep = "F"
                lightSpace("D", "Off")
                lightSpace("F", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
            }
        }
    } else if (thirdStep == "G") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
                OLED.writeStringNewLine("Fourth Step was I")
                fourthStep = "I"
                lightSpace("G", "Off")
                lightSpace("I", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
            }
        }
    }
    basic.pause(1000)
    awaitingStep = true
    OLED.writeStringNewLine("Awaiting Fifth Step")
    // fourth step was H
    // fourth step was G
    // fourth step was F
    // fourth step was I
    if (fourthStep == "H") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
                OLED.writeStringNewLine("Fifth Step was I")
                fifthStep = "I"
                lightSpace("H", "Off")
                lightSpace("I", "Step")
                awaitingStep = false
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
                awaitingStep = false
            }
        }
    } else if (fourthStep == "G") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
                OLED.writeStringNewLine("Fifth Step was I")
                fifthStep = "I"
                lightSpace("G", "Off")
                lightSpace("I", "Step")
                lightSpace("H", "Indicate")
                awaitingStep = false
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
            }
        }
    } else if (fourthStep == "F") {
        while (awaitingStep) {
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
                awaitingStep = false
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
                awaitingStep = false
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
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
            laserR = pins.analogReadPin(AnalogPin.P0)
            laserC = pins.analogReadPin(AnalogPin.P1)
            laserL = pins.analogReadPin(AnalogPin.P2)
            if (laserR > 150) {
                OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
            } else if (laserC > 150) {
                OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
                OLED.writeStringNewLine("Fifth Step was H")
                fifthStep = "H"
                lightSpace("I", "Off")
                lightSpace("H", "Step")
                awaitingStep = false
            } else if (laserL > 150) {
                OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
            }
        }
    }
    basic.pause(1000)
    awaitingStep = true
    OLED.writeStringNewLine("Awaiting Sixth Step")
    // fifth step was I
    if (fifthStep == "I") {
        if (!(fourthStep == "H")) {
            while (awaitingStep) {
                laserR = pins.analogReadPin(AnalogPin.P0)
                laserC = pins.analogReadPin(AnalogPin.P1)
                laserL = pins.analogReadPin(AnalogPin.P2)
                if (laserR > 150) {
                    OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
                } else if (laserC > 150) {
                    OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
                    OLED.writeStringNewLine("Sixth Step was H")
                    sixthStep = "H"
                    lightSpace("I", "Off")
                    lightSpace("H", "Step")
                    awaitingStep = false
                } else if (laserL > 150) {
                    OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
                }
            }
        }
    } else if (fifthStep == "H") {
        if (!(fourthStep == "I")) {
            while (awaitingStep) {
                laserR = pins.analogReadPin(AnalogPin.P0)
                laserC = pins.analogReadPin(AnalogPin.P1)
                laserL = pins.analogReadPin(AnalogPin.P2)
                if (laserR > 150) {
                    OLED.writeStringNewLine("LaserR: " + convertToText(laserR))
                } else if (laserC > 150) {
                    OLED.writeStringNewLine("LaserC: " + convertToText(laserC))
                    OLED.writeStringNewLine("Sixth Step was I")
                    sixthStep = "I"
                    lightSpace("H", "Off")
                    lightSpace("I", "Step")
                    awaitingStep = false
                } else if (laserL > 150) {
                    OLED.writeStringNewLine("LaserL: " + convertToText(laserL))
                }
            }
        }
    }
    // fifth step was H
    // IF ONE MORE SPACE
    basic.pause(1000)
    awaitingStep = true
    OLED.writeStringNewLine("Awaiting Sixth Step")
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
let strip = Connected.create(Connected.DigitalRJPin.O6, 10, Connected.NeoPixelMode.RGB)
let strip2 = Connected.create(Connected.DigitalRJPin.O7, 10, Connected.NeoPixelMode.RGB)
strip.setBrightness(50)
strip2.setBrightness(50)
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
OLED.clear()
startMaze()
basic.forever(function () {
	
})
