const textArea = document.getElementById('text-area'); // document.getElementById() takes the elements from the html so it can be used/interacted with here.
const menuButton = document.getElementById('menu-button');
const entriesDiv = document.getElementById('entries');  // entriesDiv is where the saved entries will be displayed.
const saveButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => { // Waits for user to click the button.
    const entry = textArea.value; // Grabs the text thats typed in textarea.
    localStorage.setItem('journalEntry', entry); // takes the text it took and saves in local storage. 
    console.log('Entry Saved:', entry); // Gives confirmation of save.
});

saveButton.addEventListener('click', () => { // Listens for user to click save button. Then this following code runs.
    const entry = textArea.value; // Gets typed text, puts it in variable called entry.
    if (entry.trim() !== "") { // Finds the text and removes the spaces before/after text if there is any. Then runs rest of code.
        localStorage.setItem('journalEntry', entry); // Saves the text as journalEntry.
        console.log('Entry Saved:', entry); // logs journalEntry to console to debug
        alert('Your journal entry has been saved.'); // popup alert 
    } else {
        alert('Please type something before saving.'); // If saving didn't work then you get this message.
    }
});