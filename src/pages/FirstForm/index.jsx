
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


//Styles
import { Column, AlignCenter, BackgroundPage, MainContainer, TextPage, FormContainer, Label, Input, DateInput,  QtyPeopleBtns, PersonIcon, NumPeople } from './styles';
import {FormBtn } from '../../components/Button.style';



const FirstForm = () => {
    const navigate = useNavigate();
    // Guardando os dados useState. Já começam com algumas informações
    const [name, setName] = useState('');
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');

    //Mudando as informações. Recebemos a info do usuário e setamos com a nova informação
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleDestination = (e) => {
        setDestination(e.target.value);
    }

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }


    const handleIncrement = () => {
        setNumberOfPeople(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        if (numberOfPeople > 1) {
            setNumberOfPeople(prevCount => prevCount - 1);
        }
    }

    //Botão de envio de formulário:

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    
    //Obter o código do país/cidade que foi digitado pelo usuário
    const getCountryCode = async (cityName) => {
        const geocodeEndpoint = `https://api.opencagedata.com/geocode/v1/json`;
        const apiKey = '7e2f9ab0603d40a9947993a345acf3a9';

        const params = {
            q: cityName,
            key: apiKey
        };

        try {
            const response = await axios.get(geocodeEndpoint, { params });
            console.log('City/Country Code:', response);
            if (response.data.results.length > 0) {
                return response.data.results[0].components.country_code;
            }
            return null;
        } catch (error) {
            setErrorMessage('Failed to fetch country code.');
            return null;
        }
    };

    const getCurrencyByCountryCode = async (countryCode) => {
        const restCountriesUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;
        try {
            const response = await axios.get(restCountriesUrl);
            const data = response.data;
            if (data.length > 0) {
                return data[0].currencies;
            }
            return null;
        } catch (error) {
            setErrorMessage('Failed to fetch currency.');
            return null;
        }
    };

    const handleNavigate = async () => {
        if (!name || !destination || !startDate || !endDate || numberOfPeople < 1) {
            setErrorMessage('Please fill out all fields before proceeding.');
            return;
        }

        const formData = {
            name,
            destination,
            startDate,
            endDate,    
            numberOfPeople,
        }

        try {
            const countryCode = await getCountryCode(destination);
            if (countryCode) {
                const currency = await getCurrencyByCountryCode(countryCode);
                if (currency) {
                    console.log('ccurrency API', currency);
                    formData.currency = currency;
                    localStorage.setItem('formData', JSON.stringify(formData));
                    navigate('/MainPage', {
                        state: { formData }
                    });
                } else {
                    setErrorMessage('Currency not found.');
                }
            } else {
                setErrorMessage('City not found.');
            }
        } catch (error) {
            setErrorMessage('An error occurred while fetching the city information.');
        }
    };
    


    return (
        <BackgroundPage>
            <MainContainer>
                <TextPage>To start, please, fill in the fields below:</TextPage>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                <FormContainer onSubmit={handleSubmit}>
                    <Column>
                        <Label htmlFor="name">Your Name: </Label>
                        <Input type="text" name="name" onChange={handleName} value={name} placeholder="Your name here" required />
                    </Column>

                    <Column>
                        <Label htmlFor="destination">Destination: </Label>
                        <Input type="text" name="destination" onChange={handleDestination} value={destination} placeholder="Ex.: Paris" required />
                    </Column>

                    <Column>
                        <Label htmlFor="starDate">Start date: </Label>
                        <DateInput type="date" name="starDate" onChange={handleStartDate} value={startDate} required />
                    </Column>

                    <Column>
                        <Label htmlFor="endDate">End date: </Label>
                        <DateInput type="date" name="endDate" onChange={handleEndDate} value={endDate} required />
                    </Column>

                    <AlignCenter>
                        <QtyPeopleBtns onClick={handleDecrement}>-</QtyPeopleBtns>
                        <PersonIcon><FaUser /></PersonIcon>
                        <NumPeople>{numberOfPeople}</NumPeople>
                        <QtyPeopleBtns onClick={handleIncrement}>+</QtyPeopleBtns>
                    </AlignCenter>

                    <AlignCenter>
                        <FormBtn onClick={handleNavigate} type="submit">Submit</FormBtn>
                    </AlignCenter>
                </FormContainer>
            </MainContainer>
        </BackgroundPage>
    );
}

export default FirstForm;

