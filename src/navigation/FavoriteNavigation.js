import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favorite from '../screens/Favorite'

const stack = createNativeStackNavigator()

export default function FavoriteNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen name="Favorite" component={Favorite} options={{title: 'Favoritos'}} />
    </stack.Navigator>
  )
}