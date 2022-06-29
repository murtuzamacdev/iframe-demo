// HANDLE MESSAGES RECEIVED FROM HOSTING APP
var iFrameResizer = {
    onMessage: function (message) {
        // 'payload' is passed from the hosting component which could also be a stringified JSON object.
        // This can be used for communication from the hosting app to iframe app.
        try {
            let JSONMessage = JSON.parse(message); // Locale information should be present in `JSONPayload.locale`
        } catch (e) { // If error, means payload is not a serialized JSON. It is plain string
            if (message.includes('INTERACTION_')) { // capturing click, keyup and touchstart event from the host app
                // Reset iframe session here if any
            }
        }
        console.log('FROM HOSTING APP TO IFRAME==>', message);
    }
}


// SEND IFRAME INTERACTION EVENTS TO HOSTING APP TO KEEP HOSTING APP'S SESSION ALIVE
document.addEventListener('click', interactionHandler, true);
document.addEventListener('keyup', interactionHandler, true);
document.addEventListener('touchstart', interactionHandler, true);

function interactionHandler(e) {
    parent.postMessage(`INTERACTION_${e.type}`, '*');
}