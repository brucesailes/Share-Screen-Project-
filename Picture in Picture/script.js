// FIRST ASSIGN A CONST TO THE HTML ELEMENTS YOU ARE GOING TO TARGET // // WHICH IN THIS CASE WILL BE 'VIDEO' & 'BUTTON' // 
const videoElement = document.getElementById('video'); 
const buttonElement = document.getElementById('button'); 

// PROMPT THE USER TO SELECT A MEDIA STREAM, PASS TO VIDEO ELEMENT, THE PLAY //

async function selectMediaStream () { // WHAT IS ASYNC? THE KEYWORD ASYNC BEFORE A FUNCTION MAKES THE FUNCTION RETURN A PROMISE //
    try { // THE TRY STATEMENT ALLOWS YOU TO DEFINE A BLOCK OF CODE TO BE TESTED FOR ERROS WHILE IT IS BEING EXECUTED //
        
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // WHAT IS 'navigator.mediaDevices'?IT IS A METHOD THAT IS USED TO PROMPT THE USER FOR PERMISSION TO ACCESS THEIR WEBCAM, MICROPHONES, AND SCREEN SHARING. // // RECAP, WE ARE SETTING A CONST THAT IS GOING TO HAVE OUR MEDIASTREAM DATA & WE ARE WAITING (AWAIT MEANS) TO ASSIGN THAT UNTIL THE USER HAS SELECTED WHICH SCREEN OR WINDOW THEY WANT TO SHARE // 

        // THEN WE ARE PASSING THAT MEDIASTREAM INTO OUR VIDEOELEMENT OBJECT AS ITS SOURCE OBJECT //   
        videoElement.srcObject = mediaStream; // WHAT IS 'videoElement.srcObject'? IT IS A PROPERTY THAT IS USED TO SET OR GET THE MEDIA STREAM THAT IS ASSOCIATED WITH A '<VIDEO>' ELEMENT. 


        // THEN ONCE THAT VIDEO HAS LOADED ITS META DATA //
        videoElement.onloadedmetadata = () => {
            // IT WILL CALL THIS FUNCTION THAT IS GOING TO PLAY A VIDEO // 
            videoElement.play(); 
        }

    } catch (error) { // THE CATCH STATEMENT ALLOWS YOU TO DEFINE A BLOCK OF CODE TO BE EXECUTED, IF AN ERRO OCCURS IN THE TRY BLOCK. // 
        
        // CATCH ERROR HERE // 
        console.log('whoops, error here:', error); 
    } 
}

    button.addEventListener('click', async () => {
        // DISABLE  BUTTON 
        button.disabled = true; 
        // START PICTURE IN PICTURE 
        await videoElement.requestPictureInPicture(); 
        // RESET BUTTON 
        button.disabled = false; 
    });
// ON LOAD //
selectMediaStream(); // MAKE SURE YOU DECLARE THE FUNCTION (WHICH IS WHAT IS TAKING PLACE ABOVE) BEFORE YOU CALL IT (WHICH IS WHAT: "selectMediaStream ();" ) IS DOING // 