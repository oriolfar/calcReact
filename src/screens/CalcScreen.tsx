import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalc } from '../hooks/useCalc'

enum Operators {
    add, subs, mult, div
}

export const CalcScreen = () => {

    const {
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
    } = useCalc();

    return (
        <View style={styles.calcContainer}>
            {
                (numberPrev !== '0') && (
                    <Text style={styles.resultSmall}>{numberPrev}</Text>
                )
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {number}
            </Text>

            <View style={styles.row}>
                <ButtonCalc text="C" color="#9B9B9B" action={clean} />
                <ButtonCalc text="+/-" color="#9B9B9B" action={numberSign} />
                <ButtonCalc text="del" color="#9B9B9B" action={btnDel} />
                <ButtonCalc text="/" color="#FF9427" action={btnDiv} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="7" action={constructNumber} />
                <ButtonCalc text="8" action={constructNumber} />
                <ButtonCalc text="9" action={constructNumber} />
                <ButtonCalc text="X" color="#FF9427" action={btnMult} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="4" action={constructNumber} />
                <ButtonCalc text="5" action={constructNumber} />
                <ButtonCalc text="6" action={constructNumber} />
                <ButtonCalc text="-" color="#FF9427" action={btnSubs} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="1" action={constructNumber} />
                <ButtonCalc text="2" action={constructNumber} />
                <ButtonCalc text="3" action={constructNumber} />
                <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text="0" wide action={constructNumber} />
                <ButtonCalc text="." action={constructNumber} />
                <ButtonCalc text="=" color="#FF9427" action={calculate} />
            </View>
            
        </View>
    )
}