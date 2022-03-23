basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
    }
})
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
