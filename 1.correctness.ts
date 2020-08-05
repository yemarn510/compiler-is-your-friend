/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/

function checkScript(input_str : any){
    if(typeof input_str == "string"){
        let str_array =  new Array();
        str_array = input_str.split(" ");

        for(let index = 0; index < str_array.length; index ++){
            if(str_array[index] == 'script'){
                return index;
            }
        }
    }
    else{
        return "input is not a string";
    }
}

console.log(checkScript("10239"))
