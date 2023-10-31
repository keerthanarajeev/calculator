
// display

function display(num)
{
   output.value +=num;   
}

// clear - CL

function clearAll()
{
    output.value=''
}

function evaluateExp()
{
    // methode 1

    // exp=output.value  exp=7+7
    // result=eval(exp)   result=14
    // output.value=result  display-14

    // methode 2

    output.value=eval(output.value)
}

// remove last item

function removeLast()
{
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}