import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';

//Styles
import {Select, SelectLabel} from './styles';
import { Column, AlignCenter, BackgroundPage, MainContainer, TextPage, FormContainer, Label, Input } from '../FirstForm/styles';
import {FormBtn } from '../../components/Button.style';




const AddExpense = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');


    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleValue = (e) => {
        setValue(e.target.value);
    }

    

    const handleNavigate = () => {

        if (category === '' || description === '' || value === '') {
            setErrorMessage('Please fill out all fields before proceeding.');
            return;
        }

        const addExpData = {
            category,
            description,
            value: parseFloat(value) 
        }

        navigate('/MainPage', {
            state: {
                addExpData
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNavigate();
    };

    return (
        <BackgroundPage>
            <MainContainer>
                <TextPage>Fill your expense here: </TextPage>
                <FormContainer onSubmit={handleSubmit}>
                    <SelectLabel htmlFor="categories">Category: </SelectLabel>
                    <Select name="categories" value={category} onChange={handleCategory}>
                        <option value="default">-</option>
                        <option value="transport">Transport</option>
                        <option value="stays">Stays</option>
                        <option value="food">Food</option>
                        <option value="others">Others</option>
                    </Select>

                    <Column>
                        <Label htmlFor="description">Description: </Label>
                        <Input name="description" onChange={handleDescription} type="text" />
                    </Column>

                    <Column>
                        <Label htmlFor="value">Value: </Label>
                        <Input name="value" onChange={handleValue} type="number" inputMode="decimal"/>
                    </Column>

                    <AlignCenter>
                        <FormBtn onClick={handleNavigate} type="submit">Add</FormBtn>
                    </AlignCenter>
                </FormContainer>

            </MainContainer>

            
        </BackgroundPage>
    )
}

export default AddExpense