// what is the path to the JSON file?
const apiURL = "hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {
    
    let myImageTag = document.createElement('img')
    myImageTag.src = myList[i].photo
    
    let myCaptionTag = document.createElement('figcaption')
    myCaptionTag.textContent = myList[i].name
    
    let myFigureTag = document.createElement('figure')
    myFigureTag.appendChild(myImageTag)
    myFigureTag.appendChild(myCaptionTag)


    document.getElementById('myCards').appendChild(myFigureTag)

    let myDivTag = document.createElement('div')

    // Put figure and div inside new div
    let myNewDivTag = document.createElement('div')
    myNewDivTag.appendChild(myFigureTag)
    myNewDivTag.appendChild(myDivTag)


    // Create div in .myCards
    document.getElementById('myCards').appendChild(myNewDivTag)

    // Create span
    let mySpanTag = document.createElement('span')
    myDivTag.appendChild(mySpanTag)

    let mySpanTag2 = document.createElement('span')
    myDivTag.appendChild(mySpanTag2)
    mySpanTag2.textContent = myList[i].phone

    // Create ion-icon
    let myIconTag = document.createElement('ion-icon')
    mySpanTag.appendChild(myIconTag)

    myIconTag.className = 'call'
    
    // Create paragraph
    let myPgTag = document.createElement('p')
    mySpanTag.appendChild(myPgTag)
    myPgTag.textContent = myList[i].address
    }
    
}); //end of "then" fat arrow function