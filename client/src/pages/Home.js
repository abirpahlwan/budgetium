import { useEffect, useState } from "react";

const Home = () => {
    const [expenses, setExpenses] = useState(null);

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await fetch("http://localhost:4000/api/expenses");
            const json = await response.json();

            if(response.ok) {
                setExpenses(json.data);
            }
        };

        fetchExpenses();
    }, []);

    return (
        <div className="home">
            <div className="expense-list">
                {expenses && expenses.map((expense) => (
                    <p key={expense._id}>{expense.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home;