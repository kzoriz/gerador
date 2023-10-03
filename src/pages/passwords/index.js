import { View, Text, StyleSheet } from 'react-native'

export function Passwords(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Minhas Senhas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f3f3ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 24
    }
})