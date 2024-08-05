import { Link as RouterLink } from "react-router-dom";
import {
  FormControl,
  Text,
  Link as ChakraLink,
  Checkbox,
} from "@chakra-ui/react";

import {
  routes,
  ErrorMessage,
  InputField,
  FormLayout,
  FormHeading,
  SubmitButton,
} from "shared";
import { useLoginForm } from "./lib";

export const LoginFeature = () => {
  const { register, onSubmit, formState } = useLoginForm();
  return (
    <FormLayout onSubmit={onSubmit}>
      <FormHeading>Вход</FormHeading>

      <FormControl isRequired mt="0.4rem">
        <InputField id="email" type="email" {...register("email")}>
          Эл. почта
        </InputField>
        <ErrorMessage>{formState.errors.email?.message || ""}</ErrorMessage>
      </FormControl>

      <FormControl isRequired mt="0.4rem">
        <InputField id="password" type="password" {...register("password")}>
          Пароль
        </InputField>
      </FormControl>
      <ErrorMessage>{}</ErrorMessage>
      <FormControl mt="0.4rem">
        <Checkbox
          defaultChecked
          {...register("memorization")}
          isRequired={false}
        >
          Не выходить из системы
        </Checkbox>
      </FormControl>

      <ErrorMessage>{formState.errors.root?.message || ""}</ErrorMessage>

      <SubmitButton mt="3rem" loadingText="Вход...">
        Войти
      </SubmitButton>

      <Text fontSize="sm" mt="1rem">
        Нет аккаунта?{" "}
        <ChakraLink to={routes.register} as={RouterLink} color="blue.200">
          Зарегистрироваться
        </ChakraLink>
      </Text>
    </FormLayout>
  );
};
