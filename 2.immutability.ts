/*
Question #2: Immutability

The function below is a "safe divide" function. That is, it promises not to throw any "divide by zero" exceptions.

Questions:
1) Spot and describe the bug that causes the "divide by zero" to occur.
2) Now, make a *single* code change such that the bug can be spotted by the compiler at *compile time*.
*/
function safeDivide(): number {
    let x: number = 42;

    if (x == 0) throw new Error("x should not be 0");

    x = x - 42;

    return 42 / x;
}