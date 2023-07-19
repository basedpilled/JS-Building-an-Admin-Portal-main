function addQuantity(book) {
    const label = document.createElement('label');
    label.textContent = book.title;
    const li = document.createElement('li');
    label.for = `${book.title} :`;
    const input = document.createElement('input');
    input.id = `${book.title}`;
    const button = document.createElement('button');
    li.append(label,input,button)
    button.textContent = 'quantity'
    button.addEventListener('click', async (event) => {
        await fetch('http://localhost:3001/updateBook', {
            method:'PATCH',
            headers:  {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: input.value
            })
        })
    })
    document.querySelector('#root').append(li);
}

// Your Code Here
async function main() {
   const response = await fetch('http://localhost:3001/listBooks');
   const json = await response.json();
   json.forEach((book) => {
        addQuantity(book);
   })
}
main();