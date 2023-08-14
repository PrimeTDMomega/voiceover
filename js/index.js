$(document).ready(function() {
    // Retrieve text value from local storage on page load
    const storedText = localStorage.getItem('textValue');
    if (storedText) {
        $('#text-input').val(storedText);
    }
    
    $('#speak-button').click(function() {
        const text = $('#text-input').val().trim();
        const selectedVoice = $('#voice-select').val();

        if (text !== '') {
            // Store text value in local storage
            localStorage.setItem('textValue', text);

            responsiveVoice.speak(text, selectedVoice);
        }
    });
});


