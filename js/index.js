const block1 = document.getElementsByClassName('cat-block')[0];
const block2 = document.getElementsByClassName('dog-block')[0];
const dog = document.getElementsByClassName('dog')[0];
const cat = document.getElementsByClassName('cat')[0];
const func1 = () => {
    console.log('click');
    block1.style.width = '90%';
    block2.style.width = '10%';
    cat.style.display = 'block';
    dog.style.display = 'none';
    cat.style.width = '80%';
}

const func2 = () => {
    block1.style.width = '50%';
    block2.style.width = '50%';
    cat.style.display = 'block';
    dog.style.display = 'block';
    cat.style.width = '100%';
    dog.style.width = '100%';
}
const func3 = () => {
    block1.style.width = '10%';
    block2.style.width = '90%';

    cat.style.display = 'none';
    dog.style.display = 'block';
    dog.style.width = '80%';
}