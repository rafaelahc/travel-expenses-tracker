import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//Components
import Header from '../../components/Header';
import ExpenseCategory from '../../components/ExpenseCategory';

//Styled
import {AddNewExpenseBtn } from '../../components/Button.style';
import { AlignCenter} from '../../components/Flex.style';
import {MainContent, Container, MainContentTitle, ContainerMedia} from './styles';


const MainPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        destination: '',
        startDate: '',
        endDate: '',
        numberOfPeople: 1,
        currency: {}
    });

    const [expenses, setExpenses] = useState({
        transport: [],
        stays: [],
        food: [],
        others: []
    });

    const [totalExpense, setTotalExpense] = useState(0);

    const [categoryTotals, setCategoryTotals] = useState({
        transport: 0,
        stays: 0,
        food: 0,
        others: 0
    });

    const addExpDataProcessed = useRef(false);

    useEffect(() => {

        if (location.state && location.state.formData) {
            setFormData(location.state.formData);
        } else {
            const storedData = localStorage.getItem('formData');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                if (parsedData && typeof parsedData === 'object' && !isNaN(new Date(parsedData.startDate)) && !isNaN(new Date(parsedData.endDate))) {
                    setFormData(parsedData);
                }
            }
        }

        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
            setExpenses(JSON.parse(storedExpenses));
        }

        if (location.state && location.state.addExpData && !addExpDataProcessed.current) {
            const newExpense = location.state.addExpData;

            setExpenses(prevExpenses => {
                const updatedExpenses = { ...prevExpenses };
                const category = newExpense.category;
                updatedExpenses[category] = [...updatedExpenses[category], newExpense];
                localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
                return updatedExpenses;
            });
            
            addExpDataProcessed.current = true;
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    useEffect(() => {
        const newCategoryTotals = { transport: 0, stays: 0, food: 0, others: 0 };
        Object.keys(expenses).forEach(category => {
            newCategoryTotals[category] = expenses[category].reduce((sum, expense) => sum + parseFloat(expense.value || 0), 0);
        });
        setCategoryTotals(newCategoryTotals);

        const total = Object.values(newCategoryTotals).reduce((sum, categoryTotal) => sum + categoryTotal, 0);
        setTotalExpense(total);
    }, [expenses]);
    
    const isValidCurrencyCode = (currency) => {
        try {
            var currencyKey = Object.keys(currency)[0];
            new Intl.NumberFormat(undefined, { style: 'currency', currency: currencyKey });
            return true;
        } catch (e) {
            // console.log('e',e); 
            return false;
        }
    };

    const formatCurrency = (value, currency) => {
        if (!isValidCurrencyCode(currency)) {
            return 'Invalid currency code';
        }
        var currencyKey = Object.keys(currency)[0];
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyKey,
            currencyDisplay: 'narrowSymbol'
        }).format(value);
    };


    const handleNavigate = () => {
        navigate('/addExpense', {
            state: { formData }
        });
    }

    const handleDeleteExpense = (category, index) => {
        setExpenses(prevExpenses => {
            const updatedExpenses = { ...prevExpenses };
            updatedExpenses[category].splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
            return updatedExpenses;
        });
        navigate(location.pathname, { replace: true, state: {} });
    }


    const validateFormData = (data) => {
        if (data && typeof data === 'object') {
            return {
                ...data,
                name: data.name || '',
                destination: data.destination || '',
                startDate: data.startDate || '',
                endDate: data.endDate || '',
                numberOfPeople: data.numberOfPeople || 1,
                currency: data.currency || ''
            };
        }
        return {
            name: '',
            destination: '',
            startDate: '',
            endDate: '',
            numberOfPeople: 1,
            currency: ''
        };
    };

    const validatedFormData = validateFormData(formData);

    return (
        <Container>
            {formData && (
                <ContainerMedia>
                    <Header formData={validatedFormData} totalExpense={totalExpense} formatCurrency={formatCurrency} />
                    <MainContentTitle>Resume</MainContentTitle>
                    <MainContent>
                        {['transport', 'stays', 'food', 'others'].map(category => (
                            <ExpenseCategory
                                key={category}
                                category={category}
                                expenses={expenses[category]}
                                categoryTotal={categoryTotals[category]}
                                handleDeleteExpense={handleDeleteExpense}
                                currency={formData.currency}
                                formatCurrency={formatCurrency}
                            />
                        ))}
                    </MainContent>
                </ContainerMedia>
            )}
            <AlignCenter>
                <AddNewExpenseBtn onClick={handleNavigate} type="button">+</AddNewExpenseBtn>
            </AlignCenter>
        </Container>
    );
}

export default MainPage;

