var out=""; var flag;
function stack (num)
{
    out += num;
    
    document.getElementById('output').innerHTML=out;


}

function empty()
{
    out = "";
   document.getElementById('output').innerHTML=out;
 
}

function calc()
{
    out = eval(out);
    document.getElementById('output').innerHTML=out;
    
}
 