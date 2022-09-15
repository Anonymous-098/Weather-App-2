var arr = new Array(40);

var y = 40;
for(var i=0;i<40;i++)
{
    arr[i] = y;
    y--;
}

var temp = [4,8,8,8,8,4];

var res = new Array(6);

for(var i=0;i<6;i++)
{
    res[i] = new Array(temp[i]);
}

var x = 0;
for(var i=0;i<6;i++)
{
    for(var j=0;j<temp[i];j++)
    {
        res[i][j] = arr[x];
        x++;
    }
}

console.log(res);

for(var i=0;i<6;i++)
{
    var min=999;
    var max=-999;
    for(var j=0;j<temp[i];j++)
    {
        if(res[i][j]<min)
            min=res[i][j];
        if(res[i][j]>max)
            max=res[i][j];
    }
    console.log("min:",min);
    console.log("max:",max);
}