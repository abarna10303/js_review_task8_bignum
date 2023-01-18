let container=document.querySelector(".container");

let row=document.createElement("div");
row.setAttribute("class","row");
container.appendChild(row);
let finum=document.createElement("input");
finum.setAttribute("id","firstnum");
finum.setAttribute("class","box");
row.appendChild(finum);


let se_num=document.createElement("input");
se_num.setAttribute("id","secondnum");
se_num.setAttribute("class","box");
row.appendChild(se_num);


let th_num=document.createElement("input");
th_num.setAttribute("id","thridnum");
th_num.setAttribute("class","box");
row.appendChild(th_num);


let fr_num=document.createElement("input");
fr_num.setAttribute("id","fourthnum");
fr_num.setAttribute("class","box");
row.appendChild(fr_num);


let submit_btn=document.createElement("button");
submit_btn.setAttribute("id","ans_btn");
submit_btn.innerText="Submit";
row.appendChild(submit_btn);

let para=document.createElement("div");
para.setAttribute("id","order");
row.appendChild(para);

submit_btn.addEventListener("click",function(){
    var a=parseInt(document.getElementById("firstnum").value);
    var b=parseInt(document.getElementById("secondnum").value);
    var c=parseInt(document.getElementById("thridnum").value);
    var d=parseInt(document.getElementById("fourthnum").value);

    if(a>b && a>c && a>d)
{
    if(b>c && b>d)
    {
        if(c>d)
        {
            para.innerText=(d+"  "+c+"  "+b+"  "+a);
        }
        else
        {
            para.innerText=(c+"  "+d+"  "+b+"  "+a);
        }
    }   
    else if(c>b && c>d)
        {
            if(b>d)
            {
                para.innerText=(d+" "+b+" "+c+" "+a);
            }
            else
            {
                para.innerText=(b+" "+d+" "+c+" "+a);
            }
        }
        else if(d>b && d>c)
        {
            if(b>c)
            {
                para.innerText=(c+" "+b+" "+d+" "+a);
            }
            else
            {
                para.innerText=(b+" "+c+" "+d+" "+a);
            }
        }
    
}
else if(b>a && b>c && b>d)
{
    if(a>c && a>d)
    {
        if(c>d)
        {
            para.innerText=(d+" "+c+" "+a+" "+b);
        }
        else
        {
            para.innerText=(c+" "+d+" "+a+" "+b);
        }
    }
    else if(c>a && c>d)
        {
            if(a>d)
            {
                para.innerText=(d+" "+a+" "+c+" "+b);
            }
            else
            {
                para.innerText=(a+" "+d+" "+c+" "+b);
            }
        }
     else if(d>a && d>c)
            {
                if(a>c)
                {
                    para.innerText=(c+" "+a+" "+d+" "+b);
                }
                else
                {
                    para.innerText=(a+" "+c+" "+d+" "+b);
                }
            }
}

else if(c>a && c>b && c>d)
{
    if(b>a && b>d)
    {
        if(a>d)
        {
            para.innerText=(d+" "+a+" "+b+" "+c);
        }
        else
        {
            para.innerText=(a+" "+d+" "+b+" "+c);
        }
    }
    else if(a>b && a>d)
    {
        if(b>d)
        {
            para.innerText=(d+" "+b+" "+a+" "+c);
        }
        else
        {
            para.innerText=(b+" "+d+" "+a+" "+c);
        }
    }
    else if(d>a && d>b)
    {
        if(a>b)
        {
            para.innerText=(b+" "+a+" "+d+" "+c);
        }
        else
        {
            para.innerText=(a+" "+b+" "+d+" "+c);
        }
    }
}
else if(d>a && d>b && d>c)
{
    if(a>b && a>c)
    {
        if(b>c)
        {
            para.innerText=(c+" "+b+" "+a+" "+d);
        }
        else
        {
            para.innerText=(b+" "+c+" "+a+" "+d);
        }
    }
    else if(b>a && b>c)
    {
        if(a>c)
        {
            para.innerText=(c+" "+a+" "+b+" "+d);
        }
        else
        {
            para.innerText=(a+" "+c+" "+b+" "+d)
        }
    }
    else if(c>a && c>b)
    {
        if(a>b)
        {
            para.innerText=(b+" "+a+" "+c+" "+d)
        }
        else
        {
            para.innerText=(a+" "+b+" "+c+" "+d);
        }
    }
}
});