import { ListGroup, Badge } from "react-bootstrap";
import './ExpensesItems.css';
import { Expense } from "../../models/expenses";
import { useState } from "react";

const ExpensesItems: React.FC<{expensesItems: Expense[]}> = (props) => {

    const expenses = props.expensesItems;

    return (
        <ListGroup className="expenses-items" as="ol" numbered>
            {expenses.map((e) => {
                return (
                    <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">
                                {e.name}
                            </div>
                            {e.amount} {e.amountType}
                        </div>
                    <Badge bg="primary" pill>
                    R$ {e.cost}
                    </Badge>
                </ListGroup.Item>
                )
            })}
        </ListGroup>
    );

}

export { ExpensesItems };