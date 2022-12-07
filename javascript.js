var p1symbol, p2symbol;
count=0;
flag=0
var boardData = new Array(3);
for (var i = 0; i <3; i++) {
    boardData[i] = [];
}


function intialPage()
{
    T=document.getElementById("board");
    T.style.display='none';
}
function show_sym(buttonId)
{
    p=document.getElementById(buttonId);
    // alert(buttonId)

    if (flag==0 && p.innerHTML=='')
    {
        p.innerHTML=p1symbol;
        setRecord_winner_Check(buttonId,p1symbol);
        flag=1;
        
    }
    else if( flag==1 && p.innerHTML=='')
    {
        p.innerHTML=p2symbol;
        setRecord_winner_Check(buttonId,p2symbol);
        flag=0;
    }
}
function setSym(buttonId)
{
    p=document.getElementById(buttonId)
    if(p.innerHTML=='X')
    {   
        p1symbol='X';
        p2symbol='O';
    }
    else
    {
        p1symbol='O';
        p2symbol='X';
    }
    m1=document.getElementById('msg1');
    m2=document.getElementById('msg2');
    XX=document.getElementById('X');
    OO=document.getElementById('O');
    m1.style.display='none'
    XX.style.display='none'
    OO.style.display='none'
    m2.innerHTML="Player 1's Symbol :"+p1symbol+"     Player 2's Symbol :"+p2symbol;
    T=document.getElementById("board");
    T.style.display='block';
}

function setRecord_winner_Check(buttonId,playerid)
{
    count++;
    msg2=document.getElementById("msg2")
    k=eval(buttonId);
    rowindex=Math.floor((k-1)/3);
    colindex=(k-1)%3;
    boardData[rowindex][colindex]=playerid;
    c1=0;
    c2=0;
    c3=0;
    c4=0;
    for (i=0;i<3;i++)
    {
        if (boardData[rowindex][i]==playerid)
        {
            c1++;
        }
        if (boardData[i][colindex]==playerid)
        {
            c2++;
        }
        if (boardData[i][i]==playerid)
        {
            c3++;
        }
        if (boardData[i][2-i]==playerid)
        {
            c4++;
        }

    }

    if (c1==3||c2==3||c3==3||c4==3)
    {
        msg2.innerHTML="The player with "+playerid+ " wins"

        setTimeout(() => {
            T.style.display="none";
        }, 2000);
        setTimeout(() => {
            location.reload();;
        }, 2000);
        
        
    }
    else if (count==9)
    {
        msg2.innerHTML="Match draw"
        count=0;
        setTimeout(() => {
            T.style.display="none";
        }, 2000);
        setTimeout(() => {
            location.reload();;
        }, 2000);

    }
    // else{
    //     msg2.innerHTML="Draw Match";
        
    // }

}



// function display()
// {
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++)
      
//         {
//             document.write(boardData[i][j] + " ");
//         }
//         document.write("<br>");
//     }
// }
