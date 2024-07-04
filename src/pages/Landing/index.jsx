import React from 'react';
//Styles
import { Title, SubTitle, Paragraph, Image} from './styles'
import { Link } from 'react-router-dom';

//Images
import Landing1 from '../../assets/images/landing1.jpg'
import Landing2 from '../../assets/images/landing2.jpg'
import Landing3 from '../../assets/images/landing3.jpg'


//components
import { LandingBtn } from '../../components/Button.style';
import { Flex, AlignCenter, DivIcons, ImagesDivLanding } from '../../components/Flex.style';


//ícones
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { GiCastle } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";

const Landing = () => {
    return (
        <Flex>
            <ImagesDivLanding>
                <Image src={Landing3}></Image>
                <Image src={Landing1}></Image>
                <Image src={Landing2}></Image>
            </ImagesDivLanding>

            <AlignCenter>
                <Title>Travel <br />Expense <br />
                     <SubTitle>tracker.</SubTitle>
                </Title>

            </AlignCenter>

            <AlignCenter>
                <Paragraph>Control your trip expenses</Paragraph>
                <DivIcons>
                    <MdOutlineAttachMoney />
                    <IoIosAirplane />
                    <FaBed />
                    <MdOutlineFastfood />
                    <FaTrainSubway />
                    <FaCarSide />
                    <GiCastle />
                    <FaUmbrellaBeach />
                    <MdOutlineAttachMoney />
                </DivIcons>
            </AlignCenter>

            <AlignCenter>
                <Link to="/FirstForm">
                    <LandingBtn>Let's get started</LandingBtn>
                </Link>
            </AlignCenter>            
            
        </Flex>
    )
}

export default Landing