function FAQ({curData}) {
    const {question, answer} = curData
    return (
        <li key={e.id}>
            <div className="accordion-grid">
                <p>{e.question}</p>
                <button>Show</button>
            </div>
            <p>{e.answer}</p>
        </li>
    )
}
export default FAQ