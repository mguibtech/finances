import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonsts.bold};
    color: ${({theme}) => theme.colors.title};
    font-size: 30px;
`;