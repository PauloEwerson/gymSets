import { TouchableOpacity } from "react-native";
import { HStack, VStack, Heading, Text, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { useAuth } from "@hooks/useAuth";

import { api } from "@services/api";

import defautlUserPhotoImg from '@assets/userPhotoDefault.png';

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {

  const { user, signOut } = useAuth();

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defautlUserPhotoImg
        }
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
          onPress={signOut}
        />
      </TouchableOpacity >
    </HStack>
  )
}