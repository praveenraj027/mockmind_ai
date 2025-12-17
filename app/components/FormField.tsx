import React from "react";
import {FormControl, FormItem, FormLabel, FormDescription, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import { Controller } from "react-hook-form";

interface FormFieldProps<T extends FieldValues>{
    
}

const FormField = ({control, name, label, placeholder, type="text"}: FormFieldProps<T>) => (
    <Controller name={name}
        control={control}
        render={({ field }) => {
            <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
            </FormItem>
        }}
    />)
export default FormField;