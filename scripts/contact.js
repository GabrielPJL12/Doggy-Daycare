// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", submit);

function submit()
{
    /* Let's change the body and let the user know that the message has been submitted */
    document.getElementById("contact-page").classList.add("large-text"); // This line is to assign it the large-text class so that the message is in size 24 font
    document.getElementById("contact-page").innerHTML = "Thank you for your message!"; // This line print the message
}