import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favorite from '../screens/Favorite'
import Pokemon from '../screens/Pokemon'

const stack = createNativeStackNavigator()

export default function FavoriteNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen name="Favorite" component={Favorite} options={{title: 'Favoritos'}} />
      <stack.Screen name="Pokemon" component={Pokemon} options={{title: '', headerTransparent: true}} />
    </stack.Navigator>
  )
}