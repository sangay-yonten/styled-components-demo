import React from 'react';
import { Typography } from '@mui/material'
import styled from "styled-components";

interface CustomTextProps {
    textAlign?: string;
    fontSize?: string;
    color?: string;
}

export const CustomText = styled(Typography)`
  color: ${(props: CustomTextProps) => props.color || 'black'};
  text-align: ${(props: CustomTextProps) => props.textAlign || 'left'};
  font-size: ${(props: CustomTextProps) => props.fontSize || '12px'};
`;

const ThemeMui = () => {
    return (
        <>
            <Typography fontSize="24px">Okay</Typography>
            <CustomText textAlign="right">
                Align props
            </CustomText>
            <CustomText variant="h4" color={'green'}>
                Color props
            </CustomText>
        </>
    );
};

export default ThemeMui;
