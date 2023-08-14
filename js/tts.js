$(document).ready(function() {
    $('#speak-button').click(function() {
        const text = $('#text-input').val().trim();
        
        if (text !== '') {
            responsiveVoice.speak(text);
        }
    });
});
