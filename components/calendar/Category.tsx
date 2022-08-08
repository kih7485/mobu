import React, { useState } from 'react';
import { Box, Paper, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLOR_OPTIONS } from '../../pages/api/common';
import { purple } from '@mui/material/colors';

const CategoyStyle = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Category({ types }: any) {
    const arr = types.map( (type,index) => {
        return {type: type, color: COLOR_OPTIONS[index]}
    })
    const [pick, setPick] = useState(arr);
    const [select, setSelect] = useState<string[]>([]);

    const handleToggle = (_, type) => {
        !select.includes(type)
            ? setSelect((select) => [...select, type])
            : setSelect(select.filter((button) => button !== type));
    }
    return (
        <CategoyStyle>
            {types.map((type: string, i: number) => { 
                const ColorButton = styled(Button)<ButtonProps>(({ theme }) => {
                    const textColor = select.includes(type) ?  COLOR_OPTIONS[i] : theme.palette.getContrastText(COLOR_OPTIONS[i]);
                    const backgroundColor = select.includes(type) ? '#FFFFFF' : COLOR_OPTIONS[i] ;
                    return ({
                        color: textColor, 
                        backgroundColor: backgroundColor,
                        '&:hover': {
                            backgroundColor: backgroundColor,
                            
                        },
                    })
                });
                 
                return (
                    <div key={type} onClick={event => handleToggle(event, type)}>
                        <ColorButton variant="outlined" size="large" >
                            {type}
                        </ColorButton>
                    </div>
                    )
                }
                )}
            
      </CategoyStyle>
    
  
        //   {types.map((type: string) => (type))}
  )
}

export default Category