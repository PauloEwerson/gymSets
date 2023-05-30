import { VStack, Image } from 'native-base';

import Background from '@assets/background.png';

export function SigIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image 
        source={Background}
        alt="Background com pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  )
}