import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  margin: theme.spacing(1),
  padding: theme.spacing(1),
  textAlign: 'center',
}))
