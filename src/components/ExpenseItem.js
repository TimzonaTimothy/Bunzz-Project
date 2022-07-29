import './ExpenseItem.css'

function ExpenseItem(probs) {
    // const month = probs.date.toLocaleString('en-us',{month: 'long'});
    // const day = probs.date.toLocaleString('en-us',{day: '2-digit'});
    // const year = probs.date.getFullYear();
    const Title = 'Health Insurance';
    const Amount = '200'

    return ( 
        <div className="expense-item">
            <div className="date" >Date
                {/* <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div> */}
            </div>
            <div className="expense-item-description">
                <h2>{Title}</h2>
                <div className="expense-item-price">${Amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;