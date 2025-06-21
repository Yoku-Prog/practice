document.addEventListener('DOMContentLoaded', () => {
    console.log('HELLO WORLD')

    const replyButtons = document.querySelectorAll(".reply")

    const textContents = {}

    replyButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent != 'manigga') {
                // backup original text
                textContents[button.toString()] = button.textContent
                button.textContent = 'manigga';

            } else {
                // returm to original content
                button.textContent = textContents[button.toString()]

            }
        })

    })
    
})
