import { Button } from './components/Button'
import { CheckBox } from './components/CheckBox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import './style/global.css'

export function App() {

  return (
    <div className="bg-gray-900">
    <Heading children="Heading"/>
    <Text children="Texto"/>
    <Button children="Submit"/>
    <CheckBox/>
    </div>
  )
}

