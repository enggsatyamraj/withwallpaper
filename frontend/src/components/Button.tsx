import { Text, TouchableOpacity } from 'react-native';

interface btnProps {
    text: string;
    onPress: () => void;
}

const Button = (props: btnProps) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button;