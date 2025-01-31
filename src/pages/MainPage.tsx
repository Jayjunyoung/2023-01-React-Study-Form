import styled from 'styled-components';
import { TechForm } from '../component';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    width: 100%;
    max-width: 820px;
    border-width: 8px;
    border-color: rgb(209 213 219);
    padding: 2.5rem;
`;

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <TechForm></TechForm>
            </Wrapper>
        </>
    );
};

export default MainPage;
