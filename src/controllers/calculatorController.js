const calculatorServices = require('../services/calculator');
const errorHandle = require('../middlewares/errorHandle');

function addNum(req,res)
{
    
    const num1 = req.body.n11;
    const num2 = req.body.n22;

    const  n1 = parseFloat(num1);
    const  n2 = parseFloat(num2);

    if (!errorHandle.isNum(num1) || !errorHandle.isNum(num2)) {
        return res.status(400).json({ error: 'Only numeric input is allowed' });
      }


    const result = calculatorServices.add(n1, n2);

    return res.status(200).json({ result });
}

function subNum(req,res)
{
    
    const num1 = req.body.n11;
    const num2 = req.body.n22;

    const  n1 = parseFloat(num1);
    const  n2 = parseFloat(num2);

    if (!errorHandle.isNum(num1) || !errorHandle.isNum(num2)) {
        return res.status(400).json({ error: 'Only numeric input is allowed' });
      }


    const result = calculatorServices.sub(n1, n2);

    return res.status(200).json({ result });
}

function divNum(req,res)
{
    
    const num1 = req.body.n11;
    const num2 = req.body.n22;

    const  n1 = parseFloat(num1);
    const  n2 = parseFloat(num2);

    if (!errorHandle.isNum(num1) || !errorHandle.isNum(num2)) {
        return res.status(400).json({ error: 'Only numeric input is allowed' });
      }


    const result = calculatorServices.div(n1, n2);

    return res.status(200).json({ result });
}


function mulNum(req,res)
{
    
    const num1 = req.body.n11;
    const num2 = req.body.n22;

    const  n1 = parseFloat(num1);
    const  n2 = parseFloat(num2);

    if (!errorHandle.isNum(num1) || !errorHandle.isNum(num2)) {
        return res.status(400).json({ error: 'Only numeric input is allowed' });
      }


    const result = calculatorServices.mul(n1, n2);

    return res.status(200).json({ result });
}




module.exports = {
    addNum,
    subNum,
    divNum,
    mulNum
  };
  
  

