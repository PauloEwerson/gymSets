import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  useToast
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '@services/api';
import { useAuth } from '@hooks/useAuth';

import LogoSvg from '@assets/logo.svg';
import Background from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { AppError } from '@utils/AppError';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpFormSchema = yup.object({
  name: yup.string().required('Nome obrigatório.'),
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido.'),
  password: yup.string().required('Senha obrigatória.').min(6, 'A senha deve ter no mínimo 6 caracteres.'),
  password_confirm: yup.string()
    .required('Confirmação de senha obrigatória.')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais.')
})

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const { signIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpFormSchema)
  });

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      setIsLoading(true);
      await api.post('/users', {
        name,
        email,
        password
      });
      await signIn(email, password);

    } catch (error) {
      setIsLoading(false);
      const isAppError = error instanceof AppError;
      console.log(error)
      toast.show({
        title: isAppError ? error.message : 'Ocorreu um erro ao fazer o cadastro. Tente novamente mais tarde.',
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }} // corrige o scroll
      showsHorizontalScrollIndicator={false} // remove a barra de scroll
    >
      <VStack
        flex={1}
        px={10}
        pb={16} // Adicionado para corrigir o scroll
      >
        <Image
          source={Background}
          defaultSource={Background}
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
            fontFamily="heading"
            mb={6}
          >
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name && errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='E-mail'
                keyboardType='email-address'
                autoCapitalize='none' // não capitaliza o texto
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email && errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Senha'
                secureTextEntry // não mostra o texto digitado  
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password && errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Confirme a senha'
                secureTextEntry // não mostra o texto digitado  
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
                errorMessage={errors.password_confirm && errors.password_confirm?.message}
              />
            )}
          />

          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
            isLoading={isLoading}
          />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={12}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}
