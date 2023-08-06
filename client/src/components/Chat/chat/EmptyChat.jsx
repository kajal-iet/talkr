import React from 'react';
import { emptyChatImage } from '../../../constants/data';
import{Box, Typography, styled,Divider} from '@mui/material';
const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100vh;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;
    
const Image = styled('img')({
    marginTop: 100,
    width: 400
})
const Title = styled(Typography)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #050526;
    margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;


const EmptyChat=()=> {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="image" />
        <Title>ChatBurst</Title>
        <SubTitle>One stop Destination for all your chat needs</SubTitle>
        <SubTitle>Play with files, images, emojis and much more!</SubTitle>
      <StyledDivider />
      </Container>
    </Component>
  )
}

export default EmptyChat