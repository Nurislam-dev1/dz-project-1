document.getElementById('gmail_button').onclick = function () {
    const email = document.getElementById('gmail_input').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (emailPattern.test(email)) {
        document.getElementById('gmail_result').textContent = "Email валиден!";
    } else {
        document.getElementById('gmail_result').textContent = "Email не валиден! Убедитесь, что он в формате: example@gmail.com";
    }
};

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0, positionY = 0
const moveBlock = () => {
    if (positionX < 450) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()