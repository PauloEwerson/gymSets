import { useState } from 'react';
import { Heading, VStack, SectionList } from 'native-base';

import { ScreenHeder } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {

  const [exercises, setExercises] = useState([
    {
      title: '08.06.23',
      data: ['Agachamento', 'Supino', 'Rosca Direta']
    },
    {
      title: '09.06.23',
      data: ['Puxada frontal']
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeder title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({section}) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
      />
    </VStack>
  );
}