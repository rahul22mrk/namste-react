import { sum } from "../sum"

test("sum function should calculate sum of two numbers ",()=>{
    let result = sum(3,4);
    //assertion
    expect(result).toBe(7);
})