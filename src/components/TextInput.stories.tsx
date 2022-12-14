import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react'


export default {
    title : 'Components/TextInput',
    component : TextInput.Root,
    args : {
        children : [
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your e-mail" />
        ],
    },
    argTypes : {
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
    argTypes : {
    children : {
        table : {
            disable : true
        }
    },
    }
}

export const WithNoIcon: StoryObj<TextInputRootProps> = {
    argTypes : {
    children : {
        table : {
            disable : true
        }
    },
    },
    args : {
        children : (
            <TextInput.Input placeholder="Text input with no icon" />
        )
    }
}
