message="Global";

function hello(){
    let message="Good Morning";
    
    {
        let message ="Good Afternoon";
        console.log("Hello",message);
    }
    let check = function hello2(){
        console.log(message," from hello2");
    }
    return check;
}
c=hello();
c();
