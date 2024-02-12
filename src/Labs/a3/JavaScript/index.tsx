import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";

import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";

import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import FunctionDestructing from "./functions/FunctionDestructing";

import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";

import JsonStringify from "./json/JsonStringify";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";

import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";

import TemplateLiterals from "./string/TemplateLiterals";

function JavaScript() {

    console.log('Hello World!');
    console.log('Working with Arrays');
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

    let resultString1 = numberArray1.join('');
    let resultString2 = stringArray1.join('');
    let resultString3 = variableArray1.map(item => {
        if (Array.isArray(item)) {
          return item.join('');
        } else {
          return item.toString();
        }
    }).join('');

    console.log("numberArray1 = " + resultString1);
    console.log("stringArray1 = " + resultString2);
    console.log("variableArray1 = " + resultString3);


    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants />
          <VariableTypes />
          <BooleanVariables />
          <IfElse />
          <TernaryOperator />
          <WorkingWithFunctions />
          <WorkingWithArrays />
          <ArrayIndexAndLength />
          <AddingAndRemovingDataToFromArrays />
          <ForLoops />
          <MapFunction />
          <JsonStringify />
          <FindFunction />
          <FindIndex />
          <FilterFunction />
          <TemplateLiterals />
          <House />
          <Spreading />
          <Destructing />
          <FunctionDestructing />
       </div>
    );
 }
 export default JavaScript