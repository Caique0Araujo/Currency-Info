import { useContext } from 'react';
import { Text } from 'react-native';
import Context from '../context/context';

const Logout = ({navigation}) => {
    const [authenticated, setAuthenticated] = useContext(Context);
    setAuthenticated({
        email: null,
        nome: null
    });
    return <Text />;


}

export default Logout;