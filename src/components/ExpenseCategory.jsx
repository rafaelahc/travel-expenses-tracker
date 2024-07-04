import {React, useState, useEffect} from 'react';

//Components
import DynamicInput from './DynamicInput';

//icon
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

//Style
import {DivCategory, CatTitleAndValue, Expenses, ExpenseDescription, DeleteButton, Wrapper, DisplayFlex, DeleteIcon} from './ExpenseCategory.style';
import { Input, InputAlternate } from './DynamicInput.style';

const ExpenseCategory = ({ category, expenses, categoryTotal, handleDeleteExpense, currency, formatCurrency }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleExpand = () => {
        if (expenses.length > 0) {
            setIsOpen(!isOpen);
        }
    }

    useEffect(() => {
        // Fecha o wrapper se não houver mais despesas
        
        if (expenses.length === 0) {
            setIsOpen(false);
        }
    }, [expenses]);

    return (
        <div>
            <DivCategory id={category} onClick={toggleExpand} >
                <CatTitleAndValue >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    <DisplayFlex>
                        <DynamicInput type="text"  value={formatCurrency(categoryTotal, currency)} StyledInput={Input} readOnly/>
                        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </DisplayFlex>
                </CatTitleAndValue>
            </DivCategory>
                <Wrapper isOpen={isOpen}>
                    {expenses.map((expense, index) => (
                        <Expenses key={index}>
                            <ExpenseDescription type="text" name="description" value={expense.description} readOnly />
                            <DisplayFlex>
                                {
                                <DynamicInput type="text" name="value" value={formatCurrency(parseFloat(expense.value), currency)} StyledInput={InputAlternate} readOnly /> }
                                <DeleteButton onClick={() => handleDeleteExpense(category, index)}><DeleteIcon /></DeleteButton>
                            </DisplayFlex>
                        </Expenses>

                    ))}
                </Wrapper>     
        </div>

    );
};

export default ExpenseCategory;



              