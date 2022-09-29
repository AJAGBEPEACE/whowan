f=0
i=0
let number2;
const qanda = [
    {
        "Question":"How many letters are there in the English alphabet?",
        "options": {
            "a":"26",
            "b":"25",
            "c":"16",
            "d":"10"
        },
        "answer": "a"
    },
    {
        "Question":"How many hours are there in a day?",
        "options": {
            "a":"4",
            "b":"24",
            "c":"20",
            "d":"14"
        },
        "answer": "b"
    },{
        "Question":"How many colors is in the Nigeria flag?",
        "options": {
            "a":"Three",
            "b":"Two",
            "c":"One",
            "d":"Five"
        },
        "answer": "b"
    },
    {
        "Question":"How many days are there in a week?",
        "options": {
            "a":"eight",
            "b":"twenty",
            "c":"seventeen",
            "d":"seven"
        },
        "answer": "d"
    },
    {
        "Question":" Rainbow consist of how many colours?",
        "options": {
            "a":"eight",
            "b":"seven",
            "c":"ten",
            "d":"twelve"
        },
        "answer": "b"
    },
    {
        "Question":"How many days are there in a year?",
        "options": {
            "a":"365 days (not a leap year)",
            "b":"367 days",
            "c":"52 weeks",
            "d":"14 days"
        },
        "answer": "a"
    },
    {
        "Question":"How many minutes are there in an hour?",
        "options": {
            "a":"24 hours",
            "b":"24 minutes",
            "c":"60 minutes",
            "d":"100 minutes"
        },
        "answer": "c"
    },
    {
        "Question":"How many seconds make one hour?",
        "options": {
            "a":"eight",
            "b":"60 minuutes",
            "c":"60 seconds",
            "d":"3600 seconds"
        },
        "answer": "d"
    },
]
console.log(qanda.length)
var win = new Audio('/images/winning.mp3')
var lose = new Audio('/images/loosing.mp3')
var half = new Audio('/images/67 50-50.mp3')
var up = new Audio("/images/72 Time's Up.mp3")

dont.value = 15

countDown=()=>{
    let count = dont.value
    count--
    dont.value = count
    setTimeout(countDown, 1000)
    if (count==0) {
       
        dont.value = "Time Up"
        // setTimeout(playMusic, 1000)
        window.location.href="index.html"
    }
}
countDown()

check=(e)=>{
    if (e.target.value===qanda[i].answer) {
        f=f+50000
        win.play()
        disp.innerHTML= `<h3 > You won ${f}$</h3>`
        console.log(i,qanda.length)
        if (i+1>=qanda.length) {
            window.location.href='end.html'

        } else {
            i++ 
        }
    } else {
        lose.play()
        win.pause()
        move=()=>{
            window.location.href="index.html"
        }
        setTimeout(move, 2000)
        
    }
    dont.value = 15
    question.innerHTML= `${qanda[i].Question}`
    a.innerHTML= `${qanda[i].options.a}`
    b.innerHTML= `${qanda[i].options.b}`
    c.innerHTML= `${qanda[i].options.c}`
    d.innerHTML= `${qanda[i].options.d}`
    
    
}
question.innerHTML= `${qanda[i].Question}`
a.innerHTML= ` ${qanda[i].options.a}`
b.innerHTML= `${qanda[i].options.b}`
c.innerHTML= `${qanda[i].options.c}`
d.innerHTML= `${qanda[i].options.d}`
    

fifty=()=>{
    half.play()
    const number=Math.ceil(Math.random()*4)
    console.log(number);

    if (number==number2) {
        console.log(number);
        number2=Math.ceil(Math.random()*4);
        // fiftyy();
    }
    
    if (number==1) {
        if (qanda[i].answer=="a") {
            console.log(a.innerHTML)
            fifty()
        } else {
            a.innerHTML= `Eliminated`  
        }
    }     
    if (number==2) {
        if (qanda[i].answer=="b") {
            console.log(b.innerHTML)
            fifty()
        } else {
            b.innerHTML= `Eliminated`  
        }
    }        
    if (number==3) {
        c.innerHTML= `Eliminated`   
        if (qanda[i].answer=="c") {
            console.log(c.innerHTML)
            fifty()
        } else {
            c.innerHTML= `Eliminated`  
        }
    }        
    if (number==4) {
        if (qanda[i].answer=="d") {
            console.log(d.innerHTML)
            fifty()
        } else {
            d.innerHTML= `Eliminated`  
        }
    }  
    fiftyy() 
    
}

fiftyy=()=>{
   
    number2=Math.ceil(Math.random()*4)
            console.log(number2)
            if (number2==1) {
                if (qanda[i].answer=="a") {
                    console.log(a.innerHTML)
                    fiftyy()
                } else {
                    a.innerHTML= `Eliminated`  
                }
            }     
            if (number2==2) {
                if (qanda[i].answer=="b") {
                    console.log(b.innerHTML)
                    fiftyy()
                } else {
                    b.innerHTML= `Eliminated`  
                }
            }        
            if (number2==3) {
                c.innerHTML= `Eliminated`   
                if (qanda[i].answer=="c") {
                    console.log(c.innerHTML)
                    fiftyy()
                } else {
                    c.innerHTML= `Eliminated`  
                }
            }        
            if (number2==4) {
                if (qanda[i].answer=="d") {
                    console.log(d.innerHTML)
                    fiftyy()
                } else {
                    d.innerHTML= `Eliminated`  
                    
                }
            } 
   }






