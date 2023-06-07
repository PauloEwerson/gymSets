import { useNavigation } from '@react-navigation/native';
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView
} from 'native-base';

import LogoSvg from '@assets/logo.svg';
import Background from '@assets/background.png';

import { Input } from '@components/input';
import { Button } from '@components/Button';

export function SignUp() {

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }} // corrige o scroll
      showsHorizontalScrollIndicator={false} // remove a barra de scroll
    >
      <VStack
        flex={1}
        // bg="gray.700"
        px={10}
        pb={16} // Adicionado para corrigir o scroll
      >
        <Image
          source={Background}
          alt="Background com pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color="gray.100"
            fontSize="xl"
            mb={6}
            fontFamily="heading"
          >
            Crie sua conta
          </Heading>

          <Input
            placeholder="Nome"
          />

          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none' // não capitaliza o texto
          />

          <Input
            placeholder='Senha'
            secureTextEntry // não mostra o texto digitado  
          />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}

// Criando as Rotas 02:14
