import { useEffect, useState } from "react";

import Expense from "../components/Expense"

const Home = () => {
    const [expenses, setExpenses] = useState(null);

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await fetch("/api/expenses");
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
                    // <p key={expense._id}>{expense.title}</p>
                    <Expense key={expense._id} expense={expense} />
                ))}
            </div>
        </div>
    )
}

export default Home;