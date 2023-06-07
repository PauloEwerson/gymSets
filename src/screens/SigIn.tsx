import { VStack, Image, Text, Center, Heading } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import Background from '@assets/background.png';

import { Input } from '@components/input';
import { Button } from '@components/Button';

export function SigIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
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
          Acesse sua conta
        </Heading>

        <Input
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none' // não capitaliza o texto
        />
        <Input
          placeholder='Senha'
          secureTextEntry // não mostra o texto digitado  
        />

        <Button title="Acessar" />

        <Button title="Criar conta" variant="outline"/>
      </Center>
    </VStack>
  )
}
