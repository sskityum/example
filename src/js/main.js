import Counter from './components/Counter'
import { BaseButton, PrettyButton, FunctionalButton } from './components/Buttons'


const baseBtn = new BaseButton('', 'base')
baseBtn.render()

const prettyBtn = new PrettyButton('', 'pretty', 'pretty-btn')
prettyBtn.render()

const funcBtn =  new FunctionalButton(
    '',
    'best', 
    'pretty-btn', 
    () => { alert('function button')}
)

funcBtn.render()