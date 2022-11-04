import {useContext} from 'react';
import {CalcContext} from '../context/CalcContext';

const getStyleName = scbtn => {
    const className = {
        '=': 'equals',
        'sin': 'opt',
        'cos': 'opt',
        'tan': 'opt',
    }
    return className[scbtn]
}

const ScButton = ({value}) => {
    const {calc, setCalc} = useContext(CalcContext);
    
    const resetClick = () => {
        setCalc({
            sign: '',
            num: 0,
            res: 0
        })
    }

    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    const powerClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    const equalsClick = () => {
        if(calc.res && calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    'xʸ': (a,b) => a ** b,
                }
                return result[sign](a,b);
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }
    }

    const logClick = () => {
        setCalc({
            num: Math.log10(calc.num),
            res: Math.log10(calc.res),
            sign: ''
        })
    }

    const sqrtClick = () => {
        setCalc({
            num: Math.sqrt(calc.num),
            res: Math.sqrt(calc.res),
            sign: ''
        })
    }

    const sinClick = () => {
        setCalc({
            num: Math.sin(calc.num * Math.PI / 180),
            res: Math.sin(calc.res * Math.PI / 180),
            sign: ''
        })
    }

    const cosClick = () => {
        setCalc({
            num: Math.cos(calc.num * Math.PI / 180),
            res: Math.cos(calc.res * Math.PI / 180),
            sign: ''
        })
    }

    const tanClick = () => {
        setCalc({
            num: Math.tan(calc.num * Math.PI / 180),
            res: Math.tan(calc.res * Math.PI / 180),
            sign: ''
        })
    }

    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        if(numberString === '0' & calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    const handleBtnClick = () => {
        const results = {
            'C': resetClick,
            'log': logClick,
            'xʸ': powerClick,
            '√': sqrtClick,
            'sin': sinClick,
            'cos': cosClick,
            'tan': tanClick,
            '=': equalsClick,
            '.': commaClick,
        }
    
        if(results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default ScButton