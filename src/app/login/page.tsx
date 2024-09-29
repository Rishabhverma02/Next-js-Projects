"use client"
import React from 'react'
import Link from 'next/link';
import { Image, Card, Form, Button, Redirect, PasswordField } from '../components';
import { signIn } from "next-auth/react"
import { useFormik } from 'formik';
import { LoginSchema } from '../schemas/loginSchema';
import { TextField , Typography, Divider  } from '@mui/material';
import { useRouter } from 'next/navigation'

interface InitialValues {
    email: string,
    password: string
}

function LoginPage() {

    const router = useRouter()

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<InitialValues>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
            setTimeout(() => {
                router.push('/')
            }, 1000)
        }
    })
    return (
        <div>
            <Card>
            <Typography sx={{color:'#5c5c5c', marginTop:3}} variant="h5" component="h2">Login</Typography>
                <Form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.email && touched.email ? errors.email : null}
                        error={Boolean(errors.email && touched.email)}
                    ></TextField>
                    <PasswordField
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.password && touched.password ? errors.password : ""}
                        error={Boolean(errors.password && touched.password)}
                    />
                    <Button type="submit" >Log In</Button>

                    <Redirect>Don't have an account ? <Link href={'/signup'}>Signup</Link></Redirect>
                    <Divider sx={{fontSize:12}}>or</Divider>
                    <Button secondary
                        onClick={()=>signIn("google")}
                                            >
                        <Image src='https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png'></Image>
                        Sign In with Google
                    </Button>
                    <Button secondary
                        onClick={()=>signIn("facebook")}
                                            >
                        <Image src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png'></Image>
                        Sign In with Facebook
                    </Button>

                </Form>
            </Card>
        </div>

    )
}

export default LoginPage
