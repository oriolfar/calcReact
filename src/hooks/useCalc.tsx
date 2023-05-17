import React, { useRef, useState } from 'react'


enum Operators {
    add, subs, mult, div
}

export const useCalc = () => {

    const [number, setNumber] = useState('0');
    const [numberPrev, setNumberPrev] = useState('0');

    const lastOpt = useRef<Operators>();

    const clean = () => {
        setNumber('0');
        setNumberPrev('0');
    }

    const constructNumber = (numberInput: string) => {
        if (number.includes('.') && numberInput === '.') return; //no double points
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberInput === '.') {
                setNumber(number + numberInput);
            } else if (numberInput === '0' && number.includes('.')) {
                setNumber(number + numberInput);
            } else if (numberInput !== '0' && !number.includes('.')) {
                setNumber(numberInput);
            } else if (numberInput === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + numberInput);
            }
        } else {
            setNumber(number + numberInput);
        }
    }

    const numberSign = () => {
        if (number.includes('-'))
            setNumber(number.replace('-', ''));
        else
            setNumber('-' + number);
    }

    const btnDel = () => {
        let neg = '';
        let numTemp = number;

        if (number.includes('-')) {
            neg = '-';
            numTemp = number.substring(1);
        }
        if (numTemp.length > 1) {
            setNumber(neg + numTemp.slice(0, -1));
        } else {
            setNumber('0');
        }
    }

    const replaceWithPrev = () => {
        if (number.endsWith('.')) {
            setNumberPrev(number.slice(0, -1));
        } else {
            setNumberPrev(number);
        }
        setNumber('0');
    }

    const btnDiv = () => {
        replaceWithPrev();
        lastOpt.current = Operators.div;
    }
    const btnMult = () => {
        replaceWithPrev();
        lastOpt.current = Operators.mult;
    }
    const btnSubs = () => {
        replaceWithPrev();
        lastOpt.current = Operators.subs;
    }
    const btnAdd = () => {
        replaceWithPrev();
        lastOpt.current = Operators.add;
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(numberPrev);

        if (number === 'Math Error' || numberPrev === 'Math Error' || number === 'NaN') {
            setNumber('Math Error');
        } else {
            switch (lastOpt.current) {
                case Operators.add:
                    setNumber(`${num2 + num1}`);
                    break;
                case Operators.subs:
                    setNumber(`${num2 - num1}`);
                    break;
                case Operators.mult:
                    setNumber(`${num2 * num1}`);
                    break;
                case Operators.div:
                    if (num1 === 0) {
                        setNumber('Math Error');
                    } else {
                        setNumber(`${num2 / num1}`);
                    }
                    break;
            }
        }
        setNumberPrev('0');
    }

    return {
        numberPrev,
        number,
        numberSign,
        constructNumber,
        clean,
        btnAdd,
        btnDel,
        btnDiv,
        btnMult,
        btnSubs,
        calculate,
    }
}
