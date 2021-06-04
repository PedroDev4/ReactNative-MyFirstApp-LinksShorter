import React from 'react';
import { StatusBar } from "react-native";
import { useIsFocused } from '@react-navigation/native'


function StatusBarPage(props) {
    const isFoucused = useIsFocused();

    return isFoucused ? <StatusBar {...props} /> : null

}

export default StatusBarPage;