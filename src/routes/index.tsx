import { useContext } from 'react';
import { Box, useTheme } from 'native-base';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
// import { AppRoutes } from "./app.routes";
import { AuthContext } from '@contexts/AuthContex';

export function Routes() {
  const { colors } = useTheme();

  const contextDAta = useContext(AuthContext);
  console.log(contextDAta);

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];
  return (
    <Box flex={1} bg="gray.700"> {/* Evita o glitch entre telas */}
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}