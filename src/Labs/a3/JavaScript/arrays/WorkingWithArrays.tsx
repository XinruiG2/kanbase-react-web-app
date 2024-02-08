function WorkingWithArrays() {
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
    
      return (
       <>
        <h3>Working with Arrays</h3>
        numberArray1 = { resultString1 }<br />
        stringArray1 = { resultString2 }<br/>
        variableArray1 = { resultString3 }<br/>
       </>
      )    
}
export default WorkingWithArrays