const pasos = [
    "Open your terminal",
    "Run 'npm start vite@latest'",
    "Select 'React'",
    "Choose your favourite language",
    "Run 'cd project-name'",
    "Run 'npm install'",
    "Run 'npm run dev'"
]

function List() {
    const listaPasos = pasos.map((paso) => {
        return <li>{paso}</li>
    })
    return <ol>{listaPasos}</ol>
}

export default List;