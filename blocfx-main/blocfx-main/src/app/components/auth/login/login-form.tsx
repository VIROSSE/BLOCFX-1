"use client"

import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import { SubmitButtonWithIcon } from '../../ui/button';
import { Input } from '../../input';
import Link from 'next/link';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [onSubmitLoading, setOnSubmitLoading] = useState(false);

    const RequireBadge = ({ title }: { title: string }) => {
        return (
            <div className='absolute top-2 sm:top-[0.765rem] left-4'>
                <div className='flex items-center gap-2 text-gray-700 text-sm'>
                    <p>{title}</p>
                    <p className='text-red-400 '>*</p>
                </div>
            </div>
        )
    }

    const onSubmit = async (data: any) => {
        try {
            setOnSubmitLoading(true);
            const authString = btoa('Y2xvdWQ6Y2xvdWRzdGF0aW9u');
            const response = await axios.post('https://n8n.cloud-station.xyz/webhook/signup', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${authString}`,
                },
            });

            const responseData = response.data;

            if (responseData.success) {
                setOnSubmitLoading(false);
                toast.success('Successfully registered!');
                console.log('Signup successful');
            } else {
                setOnSubmitLoading(false);
                toast.error('Registration failed');
                console.error('Signup failed:', responseData.error);
            }
        } catch (error) {
            setOnSubmitLoading(false);
            toast.error('Registration failed');
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className=' bg-white  items-center justify-center flex flex-col gap-10'>
            <div className='flex'>
                <h1 className='text-2xl md:text-3xl font-cenios leading-4'>Login</h1>
            </div>
            <div className='flex w-full   flex-col items-center gap-6 '>
                <form onSubmit={handleSubmit(onSubmit)} className='grid space-y-4'>
                    <Input
                        title='Email'
                        type="text"
                        {...register("email", { required: true })}
                    />

                    <Input
                        title='Password'
                        type="password"
                        className='w-[14rem] md:w-[20rem]'
                        {...register("password", { required: true })}
                    />

                    <div className='text-xs flex justify-between px-5 -pt-3 '>
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' />
                            <span className='text-xs'>Remember me</span>
                        </div>
                        <Link
                            href={"/"}
                            className='hover:underline'
                        >
                            Forget password?
                        </Link>
                    </div>



                    <div className="pt-10  flex flex-col justify-center items-center gap-5">
                        <SubmitButtonWithIcon title='Login' disabled={onSubmitLoading} />

                    </div>
                </form>
            </div>
        </div>

    )
}
