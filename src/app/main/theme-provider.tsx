import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ThemeProviderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

// Define what props.theme will look like
const theme = {
    main: "mediumseagreen"
};

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 24px;
  margin: 16px;
  padding: 06px 12px;
  border-radius: 8px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
    theme: {
        main: "palevioletred"
    }
}

const ThemeProviderComponent = () => {
    return (
        <ThemeProviderContainer>
            <Button>Normal</Button>

            <ThemeProvider theme={theme}>
                <Button>Themed</Button>
            </ThemeProvider>
        </ThemeProviderContainer>
    );
};

export default ThemeProviderComponent;
