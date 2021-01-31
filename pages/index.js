import styled from 'styled-components';
import db from '../db.json';
import "tailwindcss/tailwind.css";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secundary};
`

const BackgroundImage = styled.div`
  
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  background-color: red;
  width: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 94%;
  &:hover {
    opacity: 98%;
    transition: 1000ms;
    transition-delay: 0,25s;
    -webkit-transform: translateZ(1);
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screean and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <div className="bg-black dark border-black border-">
    <BackgroundImage>
        <QuizContainer>
          <Title>
            Quiz
          </Title>
        </QuizContainer>
    </BackgroundImage>
  
    </div>
    
  );
}
