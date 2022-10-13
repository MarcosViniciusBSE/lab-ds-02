import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckBoxProps{
}

export function CheckBox({} : CheckBoxProps){
    return(
        <CheckBoxPrimitive.Root className="flex gap-2 w-6 h-6 p-[2px] bg-gray-800 rounded">
           <CheckBoxPrimitive.Indicator asChild>
                <Check weight="bold" className="w-5 h-5 text-cyan-300" />
           </CheckBoxPrimitive.Indicator>
           
        </CheckBoxPrimitive.Root>
    )
}