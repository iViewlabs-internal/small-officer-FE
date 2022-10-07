import React from 'react'

const ResetPassword = () => {
  return (
    <div>ResetPassword</div>
  )
}

export default ResetPassword
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {useState} from 'react';
// import { useAppDispatch, useAppSelector } from '../../Redux/hook';
// import { resetPassword, signUp } from '../../Redux/Actions/Authentication';
// import {useNavigate} from 'react-router-dom';

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         iView Labs
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function ResetPassword() {

//     const [pass, setPass] = useState({
//         oldPassword : "",
//         newPassword : "",
//         confirmNewPassword : ""
//     })

//     const dispatch = useAppDispatch()

//     const store = useAppSelector((state : any) => state)

//     const navigate = useNavigate()

//   const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

//     const {name, value} = e.currentTarget

//     setPass((prevData : any) => ({
//         ...prevData,
//         [name] : value
//     }))
//   }  

// //   console.log(pass)

//   store.AuthReducer.signup.password === pass.oldPassword ? console.log('yesssssssssssssssssssssssss') : console.log('noooooooooooooooooooooo')

//   console.log(store.AuthReducer.signup.password)
//   console.log(pass.oldPassword)

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if(store.AuthReducer.signup.password === pass.oldPassword && store.AuthReducer.signup.password !== pass.newPassword && pass.newPassword === pass.confirmNewPassword ){
//         dispatch(resetPassword(pass.newPassword))
//         // dispatch(signUp({
//         //     ...store.AuthReducer.signup,
//         //     password : pass.newPassword
//         // }))
//         navigate('/')
//       }
//       else{
//         alert('Please enter valid data')
//       }

//     dispatch(resetPassword(pass.newPassword))
//     // const data = new FormData(event.currentTarget);
//     // console.log({
//     //   email: data.get('email'),
//     //   password: data.get('password'),
//     // });
//   };

//   console.log(store.AuthReducer)

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Reset password
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="oldPassword"
//                 label="Old Password"
//                 type="password"
//                 id="password"
//                 onChange={handleChange}
//                 value={pass.oldPassword}
//                 autoComplete="Old Password"
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="newPassword"
//                 label="New Password"
//                 type="password"
//                 id="password"
//                 onChange={handleChange}
//                 value={pass.newPassword}
//                 autoComplete="New Password"
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="confirmNewPassword"
//                 label="Confirm New Password"
//                 type="password"
//                 id="password"
//                 onChange={handleChange}
//                 value={pass.confirmNewPassword}
//                 autoComplete="Confirm New Password"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Reset Password
//               </Button>
//               <Grid container>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
