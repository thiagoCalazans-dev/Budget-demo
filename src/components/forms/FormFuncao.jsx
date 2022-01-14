import React from 'react';
import Input from '../layout/Input'

export default function FormFuncao (onSubmit) {
    return (
        <form onSubmit={onSubmit}>
            <Input />
        </form>
    )


} 