import { VStack } from 'native-base';

import { ScreenHeder } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeder title="Histórico de Exercícios" />

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  );
}