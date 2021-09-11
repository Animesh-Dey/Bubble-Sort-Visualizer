let grid=document.querySelector('.grid');
let butn=document.querySelector('.button');
let timeout=1000;
let squares=[];


for(let i=0;i<10;i++)
{
    let square=document.createElement('div');
    square.setAttribute('id',i);
    // square.setAttribute('class',i+1);
    square.innerHTML=10-i;
    grid.append(square);
    squares.push(square);
}

function bubble_sort()
{
    
    //n-1 passes
    let counter=1;
    while(counter<squares.length)
    {
        butn.disabled=true;
    butn.classList.remove('button');
        for(let i=0;i<(squares.length-counter);i++)
        {
            setTimeout(()=>{
            if (parseInt(squares[i].innerHTML)>parseInt(squares[i+1].innerHTML))
            {

                if(i>0)
                {
                    squares[i-1].classList.remove('exchange');
                    squares[i].classList.remove('exchange');
                }

                squares[i].classList.add('exchange');
                squares[i+1].classList.add('exchange');
                
                setTimeout(()=>{
                    let temp=squares[i].innerHTML;
                    squares[i].innerHTML=squares[i+1].innerHTML;   
                    squares[i+1].innerHTML=temp;
                    squares[i].classList.remove('exchange');
                    squares[i+1].classList.remove('exchange');
                },1000);
            }
            },timeout);
            timeout+=2000;
        }
        counter++;
    }
    
}
function retry()
{
    location.reload();
}
