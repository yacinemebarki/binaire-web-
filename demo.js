//au decimal <10
function ato10(num1, num2){
    let ato10 = 0;
    s=num1
    p=1
    r=0
    while (s>0){
        r=s%10
        ato10=ato10+r*p
        p=p*num2
        s = Math.floor(s/10)
    }
    return ato10
}
//au une base <10
function reverse(num1,num2){
    reverse = 0
    s=num1
    p=1
    while (s>0){
        r=s%num2
        reverse=reverse+r*p
        p=p*10
        s=Math.floor(s/num2)
    }
    return reverse
}
//au une base >10
function a1to10(num1,num2){
    let a1to10 =0
    a=num1.length
    p=1
    for (i=0;i<a; i++){
        p=p*num2
    }
    for (i=0;i<a;i++){
        p=Math.floor(p/num2)
        if (num1[i]=="A" || num1[i]=="a"){
            a1to10=a1to10+10*p
        }
        else if (num1[i]=="b" || num1[i]=="B"){
            a1to10=a1to10+11*p
        }   
        else if (num1[i]=="c" || num1[i]=="C"){
            a1to10=a1to10+12*p
        }  
        else if (num1[i]=="d" || num1[i]=="D"){
            a1to10=a1to10+13*p
        }
        else if (num1[i]=="e" || num1[i]=="W"){
            a1to10=a1to10+14*p
        }
        else if (num1[i]=="F"|| num1[i]=="f"){
            a1to10=a1to10+15*p
        }
        else {
            a1to10=a1to10+parseInt(num1[i])*p
        }
            
    }
    

    return a1to10
}
//au decimal >10
function reverse2(num1,num2){
    let reverse2=""
    n=0
    s=num1
    p=num1
    while (num1>0){
        num1=Math.floor(num1/num2)
        n=n+1
    }
    for (i=n;i>0;i--){
        s=s%num2
        
        if (s==10){
            reverse2="A"+reverse2
        }
        else if (s==11){
            reverse2="B"+reverse2
        }
        else if (s==12){
            reverse2="C"+reverse2
        }
        else if (s==13){
            reverse2="D"+reverse2
        }
        else if (s==14){
            reverse2=reverse2+"E"+reverse2
        }
        else if (s==15){
            reverse2=reverse2+"F"+reverse2
        }
        else {
            reverse2=parseInt(s)+reverse2
        }
        s=Math.floor(p/num2)
    }
    return reverse2
   
    
}
//complement 2
function c2tob(num1){
    c2tob=""
    h=true
    i=num1.length-1
    while (h==true && i>0){
        if (num1[i]=="1"){
            h=false
            c2tob="1"+c2tob
        }
        else {
            i=i-1
            c2tob="0"+c2tob
        }
    }
    for (j=i-1; j>=0; j--){
        if (num1[j]=="1"){
            c2tob="0"+c2tob
        }
        else {
            c2tob="1"+c2tob
        }
    }
    return c2tob
}
document.getElementById('covertbtn').addEventListener('click', function(){
    let input = document.getElementById('convertir').value
    let base = document.getElementById('base').value
    let check = document.getElementById('dec').checked

    if (check==true){
        let result = reverse(input,base)
        document.getElementById('resultat').value = result 
    }
    else {
        let result = ato10(input,base)
        document.getElementById('resultat').value = result
    }
    if (base>=10){
        document.getElementById('resultat').value="go to conversion 10 - 16"
    }
        

    
})
document.getElementById('covertbtn1').addEventListener('click', function(){
    let input = document.getElementById('convertir1').value
    let base = document.getElementById('base1').value
    let check1 = document.getElementById('dec1').checked
    if (check1==true){
        let result1 = reverse2(input,base)
        document.getElementById('resultat1').value = result1
    }
    else  {
        let result1 = a1to10(input,base)
        document.getElementById('resultat1').value = result1

    }
    if (base<10){
        document.getElementById('resultat1').value="go to conversion 10 -16"
    }
})
document.getElementById('covertbtn2').addEventListener('click', function(){
    let input = document.getElementById('co2').value
    let check1 = document.getElementById('co2b').checked
    if (check1==true){
        let result1 = c2tob(input,base)
        document.getElementById('rs').value = result1
    }
    else  {
        let result1 = c2tob(input,base)
        document.getElementById('rs').value = result1

    }
})


