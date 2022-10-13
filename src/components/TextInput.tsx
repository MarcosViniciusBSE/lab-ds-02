import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputRootProps{
    children : ReactNode;
}

function TextInputRoot(props : TextInputRootProps){
    return (
        <div className="flex itens-center gap-3 py-4 px-3 focus-within:ring-1 transition-colors ring-white bg-gray-800 rounded  w-full ">        
        {props.children}
        </div>
    )
}

export interface TextInputIconProps {
    children : ReactNode
}

function TextInputIcon(props : TextInputIconProps){
    return(
        <Slot className='w-6 h-6 text-gray-400 '>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props : TextInputInputProps){
    
    return(
                
        <input         
        className="bg-transparent flex-1 text-gray-100 outline-none text-xs placeholder:text-gray-400"      
        {...props}
        />
    )
}

export const TextInput = {
    Root : TextInputRoot,
    Input : TextInputInput,
    Icon : TextInputIcon,
}