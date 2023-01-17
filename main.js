let a=parseInt(prompt("Enter the First number"));
let b=parseInt(prompt("Enter the Second number"));
let c=parseInt(prompt("Enter the Thrid number"));
let d=parseInt(prompt("Enter the Fourth number"))
if(a>b && a>c && a>d)
{
    if(b>c && b>d)
    {
        if(c>d)
        {
            document.write(d," ",c," ",b," ",a);
        }
        else
        {
            document.write(c," ",d," ",b," ",a);
        }
    }
    else
    {
        if(c>b && c>d)
        {
            if(b>d)
            {
                document.write(d," ",b," ",c," ",a);
            }
            else
            {
                document.write(b," ",d," ",c," ",a);
            }
        }
        else if(d>b && d>c)
        {
            if(b>c)
            {
                document.write(c," ",b," ",d," ",a);
            }
            else
            {
                document.write(b," ",c," ",d," ",a);
            }
        }
    }
}
else if(b>a && b>c && b>d)
{
    if(a>c && a>d)
    {
        if(c>d)
        {
            document.write(d," ",c," ",a," ",b);
        }
        else
        {
            document.write(c," ",d," ",a," ",b);
        }
    }
    else
    {
        if(c>a && c>d)
        {
            if(a>d)
            {
                document.write(d," ",a," ",c," ",b);
            }
            else
            {
                document.write(a," ",d," ",c," ",b);
            }
        }
        else
        {
            if(d>a && d>c)
            {
                if(a>c)
                {
                    document.write(c," ",a," ",d," ",b);
                }
                else
                {
                    document.write(a," ",c," ",d," ",b);
                }
            }
        }
    }
}
else if(c>a && c>b && c>d)
{
    if(b>a && b>d)
    {
        if(a>d)
        {
            document.write(d," ",a," ",b," ",c);
        }
        else
        {
            document.write(a," ",d," ",b," ",c);
        }
    }
    else if(a>b && a>d)
    {
        if(b>d)
        {
            document.write(d," ",b," ",a," ",c);
        }
        else
        {
            document.write(b," ",d," ",a," ",c);
        }
    }
    else if(d>a && d>b)
    {
        if(a>b)
        {
            document.write(b," ",a," ",d," ",c);
        }
        else
        {
            document.write(a," ",b," ",d," ",c);
        }
    }
}
else if(d>a && d>b && d>c)
{
    if(a>b && a>c)
    {
        if(b>c)
        {
            document.write(c," ",b," ",a," ",d);
        }
        else
        {
            document.write(b," ",c," ",a," ",d);
        }
    }
    else if(b>a && b>c)
    {
        if(a>c)
        {
            document.write(c," ",a," ",b," ",d);
        }
        else
        {
            document.write(a," ",c," ",b," ",d)
        }
    }
    else if(c>a && c>b)
    {
        if(a>b)
        {
            document.write(b," ",a," ",c," ",d)
        }
        else
        {
            document.write(a," ",b," ",c," ",d);
        }
    }
}