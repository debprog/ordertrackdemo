container=document.getElementById("con");
start=document.getElementById("start");



function tracking()
{
    setTimeout(()=>{
        let heading = document.createElement("h1");
        heading.textContent = "Out for shipping";

// Append the heading element to the header element
       container.appendChild(heading);}
        ,1000
    )

    setTimeout(()=>{
        let heading = document.createElement("h1");
        heading.textContent = "shipping done";

// Append the heading element to the header element
       container.appendChild(heading);},1000*5
    )

    setTimeout(()=>{
        let heading = document.createElement("h1");
        heading.textContent = "Out for delivery";

// Append the heading element to the header element
       container.appendChild(heading);},1000*10
    )

    setTimeout(()=>{
        let heading = document.createElement("h1");
        heading.textContent = "Delivered Sucessfully";

// Append the heading element to the header element
       container.appendChild(heading);},1000*15
    )

}
    

start.addEventListener('click',()=>{tracking()});







