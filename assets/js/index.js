const formName = document.getElementById("form-name");
const inputTextName = document.getElementById("text-name");

const lettersOnlyRegex = /^[a-zA-Zа-яА-Я]+$/;
const savedName = localStorage.getItem('user_name');
if (savedName) {
    hideFormAndShowName(savedName);
} else {
    formName.style.display = 'block';
}

formName.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = inputTextName.value;
    isValidName(name);
});

function isValidName(name) {
    if (!name.trim()) {
        alert('Add Name');
    } else if (!lettersOnlyRegex.test(name)) {
        alert('The name can only contain letters');
    } else {
        saveNameToLocalStorage(name);
        hideFormAndShowName(name);
    }
}

function saveNameToLocalStorage(name) {
    localStorage.setItem('user_name', name);
}

function hideFormAndShowName(name) {
    formName.style.display = 'none';
    const item = document.createElement('p');
    item.className = 'name-welcome';
    item.innerHTML = `Hello, ${name}!`;
    document.body.append(item);
}
