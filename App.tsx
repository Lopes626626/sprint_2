import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListaRegistrosScreen from "./src/screens/ListaRegistrosScreen";
import CadastroRegistroScreen from "./src/screens/CadastroRegistroScreen";
import DetalheRegistroScreen from "./src/screens/DetalheRegistroScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2563EB",
          },

          headerTintColor: "#fff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Lista"
          component={ListaRegistrosScreen}
          options={{
            title: "Registros Industriais",
          }}
        />

        <Stack.Screen
          name="Cadastro"
          component={CadastroRegistroScreen}
          options={{
            title: "Novo Registro",
          }}
        />

        <Stack.Screen
          name="Detalhe"
          component={DetalheRegistroScreen}
          options={{
            title: "Detalhes do Registro",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}