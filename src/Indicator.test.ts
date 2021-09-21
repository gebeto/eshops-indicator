import * as Indicator from "./Indicator"

// @ponicode
describe("getPercentDifference", () => {
    let inst: any

    beforeEach(() => {
        inst = new Indicator.default(false, { title: "International Intranet Coordinator", previous: "Mon Aug 03 12:45:00", processPercentage: "Architect", drawRange: 410, current: 1 })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getPercentDifference()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("drawBackground", () => {
    let inst: any

    beforeEach(() => {
        inst = new Indicator.default(false, { title: "Future Interactions Representative", drawRange: 320, current: -1, previous: "01:04:03" })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.drawBackground()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getArrowAngle", () => {
    let inst: any

    beforeEach(() => {
        inst = new Indicator.default(6, true)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getArrowAngle()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("drawArrow", () => {
    let inst: any

    beforeEach(() => {
        inst = new Indicator.default(false, { title: "International Intranet Coordinator", previous: "2017-09-29T23:01:00.000Z", processPercentage: "Producer", drawRange: 4, current: 0 })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.drawArrow()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("drawMiddleText", () => {
    let inst: any

    beforeEach(() => {
        inst = new Indicator.default(false, "a1969970175")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.drawMiddleText()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("drawRangeText", () => {
    let inst: any

    beforeEach(() => {
        inst = new Indicator.default(9, { title: "International Intranet Coordinator", previous: "2017-09-29T23:01:00.000Z", processPercentage: "Developer", drawRange: 50, current: 100 })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.drawRangeText()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("drawPercentArrows", () => {
    let inst: any

    beforeEach(() => {
        inst = new Indicator.default({ width: 12, dataset: { title: "Direct Functionality Orchestrator", drawRange: 320, current: 0, previous: "01:04:03" } }, { title: "Future Interactions Representative", drawRange: 320, current: 1, previous: "Mon Aug 03 12:45:00" })
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.drawPercentArrows()
        }
    
        expect(callFunction).not.toThrow()
    })
})
