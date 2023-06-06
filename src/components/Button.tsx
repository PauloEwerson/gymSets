import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...resr }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg="green.700"
      rounded="sm"
      _pressed={{
        bg: 'green.500',
      }}
      {...resr}
    >
      <Text
        color="white"
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}