// Header.js
import React from 'react';
import { useState, useEffect } from 'react';

//Icons
import { FaUser } from 'react-icons/fa';
//Data Format
import { format } from 'date-fns';
//style
import { FlexHeader, BackgroundPhoto, AddBgImage, HelloUser, MainInfoWrapper, MainInfo, StyledLocationMarker, Destination, TravelDate, TotalHeader, TotalTitle,  TotalAndSymbolDiv, Total } from './Header.style';
//Image Background 
import ImageSelector from './ImageSelector';

//Format date function
const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
        return 'Invalid Date';
    }
    return format(date, 'dd/MM/yyyy');
};

//Receive and print data from FirstForm
const Header = ({ formData, totalExpense, formatCurrency }) => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const savedImage = localStorage.getItem('backgroundImage');
        if (savedImage) {
            setBackgroundImage(savedImage);
        }
    }, []);

    const handleSelectImage = (url) => {
        setBackgroundImage(url);
        localStorage.setItem('backgroundImage', url);
        setIsModalOpen(false);
    }


    return (
        <FlexHeader>
        <HelloUser>Hello, {formData.name}!</HelloUser>
        <BackgroundPhoto backgroundImage={backgroundImage}>
            <AddBgImage onClick={() => setIsModalOpen(true)}>Add Background</AddBgImage>
                {isModalOpen && (
                    <ImageSelector
                        onSelect={handleSelectImage}
                        closeModal={() => setIsModalOpen(false)}
                    />
                )}
            <MainInfo>
                <MainInfoWrapper>
                    <Destination><StyledLocationMarker /> {formData.destination}</Destination>
                    <TravelDate>{formatDate(formData.startDate)} - {formatDate(formData.endDate)}</TravelDate>
                </MainInfoWrapper>
                <MainInfoWrapper>
                    <span><FaUser /> {formData.numberOfPeople}</span>
                </MainInfoWrapper>
            </MainInfo>
        </BackgroundPhoto>

        <TotalHeader>
            <TotalTitle>Total</TotalTitle>
            <TotalAndSymbolDiv>
                <Total type="text" value={formatCurrency(totalExpense, formData.currency)} readOnly placeholder="0,00" />
            </TotalAndSymbolDiv>

        </TotalHeader>

    </FlexHeader>

    );
};

export default Header;