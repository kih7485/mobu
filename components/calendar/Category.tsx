import React from 'react';
import { Box, Paper, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLOR_OPTIONS } from '../../pages/api/common';
import { purple } from '@mui/material/colors';
const LOTTTO_LIST = [
    "아파트 분양",
    "APT 무순위/잔여세대",
    "오피스텔"
]

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
    return (
        <CategoyStyle>
            {/* <Box sx={{ '& button': { m: 1 } }}> */}
                {types.map((type: string, i:number) => { 
                    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
                        color: theme.palette.getContrastText(COLOR_OPTIONS[i]),
                        backgroundColor: COLOR_OPTIONS[i],
                        '&:hover': {
                            backgroundColor: COLOR_OPTIONS[i],
                            
                        },
                    }));
                    return (
                        <div key={type}>
                            <ColorButton variant="outlined" size="large">
                                {type}
                            </ColorButton>
                        </div>
                        )
                }
                )}
            {/* <Box gridColumn="span 8">
                <Item>xs=8</Item>
            </Box>
            <Box gridColumn="span 4">
                <Item>xs=4</Item>
            </Box> */}
            
        {/* </Box> */}
            
      </CategoyStyle>
    
  
        //   {types.map((type: string) => (type))}
  )
}

export default Category