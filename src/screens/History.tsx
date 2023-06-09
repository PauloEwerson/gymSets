import { VStack } from 'native-base';

import { ScreenHeder } from '@components/ScreenHeader';

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeder
        title="Histórico de Exercícios"
      />
    </VStack>
  );
}