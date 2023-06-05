import { Form, Button, Row, Col } from "react-bootstrap";
import { Expense } from "../../models/expenses";
import React, { FormEvent, useState } from "react";

const ExpenseItemForm: React.FC<{addExpanseDataHandler: (expenseData: Expense) => void}> = (props) => {

    const { addExpanseDataHandler } = props;

    const [ expenseData, setExpenseData] = useState<Expense>({
        id: Math.random(),
        name: '',
        cost: 0,
        amount: 0,
        amountType: 'un',
    });

    const [ expenseName, setExpenseName ] = useState<string>('');
    const [ expenseCost, setExpenseCost ] = useState<number>(0);
    const [ expenseAmount, setExpenseAmount ] = useState<number>(0);
    const [ expenseAmountType, setExpenseAmountType] = useState<string>('');

    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenseName(event.currentTarget.value);
        // Eu nao entendi muito bem aqui.
        setExpenseData((prevState) => {return {...prevState, name: event.target.value}});
    };

    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenseAmount(parseInt(event.currentTarget.value));
    };

    const costChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpenseCost(parseFloat(event.currentTarget.value));
    };

    const amountTypeChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setExpenseAmountType(event.currentTarget.value);
    };

    const clearForm = () => {
        setExpenseCost(0);
        setExpenseAmount(0);
        setExpenseAmountType('');
        setExpenseName('');
    }

    function submitHandler(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const expenseObj: Expense = {
            id: Math.random(),
            name: expenseName,
            amount: expenseAmount,
            amountType: expenseAmountType,
            cost: expenseCost,
        };

        addExpanseDataHandler(expenseObj);

        clearForm();
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col xs='12' sm='6'>
                    <Form.Group className="mb-3" controlId="expense-name">
                        <Form.Label>Item</Form.Label>
                        <Form.Control onChange={nameChangeHandler} value={expenseName} type="text" placeholder="Item de mercado" />
                        <Form.Text className="text-muted">
                        Ex: Tomate, Agua, Queijo...
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col sm='3'>
                    <Form.Group className="mb-3" controlId="expense-amount">
                        <Form.Label>Quantidade</Form.Label>
                        <Form.Control onChange={amountChangeHandler} value={expenseAmount} type="number" placeholder="Quantidade (gramas/kilos/unidades)" />
                        <Form.Text className="text-muted">
                        Ex: 500g, 1kg, 3 un...
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>Unidade</Form.Label>
                    <Form.Select onChange={amountTypeChangeHandler} aria-label="Default select example">
                        <option>Selecione uma opçao</option>
                        <option value="un">Unidades</option>
                        <option value="g">Gramas</option>
                        <option value="kg">Kilos</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                        Ex: g, kg, un,..
                    </Form.Text>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="expense-cost">
                <Form.Label>Preço</Form.Label>
                <Form.Control value={expenseCost} onChange={costChangeHandler} type="number" step='any' placeholder="Preço" />
                <Form.Text className="text-muted">
                  Ex: R$ 3,00, R$ 10,99...
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );

}

export {ExpenseItemForm}