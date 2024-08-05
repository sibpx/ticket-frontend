import { Link as RouterLink } from "react-router-dom";
import { FormControl, Text, Link as ChakraLink } from "@chakra-ui/react";

import {
  routes,
  ErrorMessage,
  InputField,
  FormLayout,
  FormHeading,
  SubmitButton,
} from "shared";

import { useRegisterForm } from "./lib";

export const RegisterFeature = () => {
  const { formState, onSubmit, register, isRegistered } = useRegisterForm();

  if (isRegistered) {
    return (
      <Text fontSize="lg">
        Вы успешно зарегистрировались!{" "}
        <ChakraLink to={routes.login} as={RouterLink} color="blue.200">
          Войти
        </ChakraLink>
      </Text>
    );
  }

  return (
    <FormLayout onSubmit={onSubmit}>
      <FormHeading>Регистрация</FormHeading>
      <FormControl isRequired>
        <InputField
          id="name"
          type="text"
          {...register("name")}
          isInvalid={!!formState.errors.name}
        >
          Имя пользователя
        </InputField>
        <ErrorMessage>{formState.errors.name?.message || ""}</ErrorMessage>
      </FormControl>

      <FormControl isRequired mt="0.4rem">
        <InputField
          id="email"
          type="email"
          {...register("email")}
          isInvalid={!!formState.errors.email}
        >
          Эл. почта
        </InputField>
        <ErrorMessage>{formState.errors.email?.message || ""}</ErrorMessage>
      </FormControl>

      <FormControl isRequired mt="0.4rem">
        <InputField
          id="password"
          type="password"
          {...register("password")}
          isInvalid={!!formState.errors.password}
        >
          Пароль
        </InputField>
        <ErrorMessage>{formState.errors.password?.message || ""}</ErrorMessage>
      </FormControl>

      <ErrorMessage>{formState.errors.root?.message || ""}</ErrorMessage>

      <SubmitButton
        mt="3rem"
        loadingText="Регистрация"
        isLoading={formState.isSubmitting}
        isDisabled={!formState.isValid}
      >
        Зарегистрироваться
      </SubmitButton>

      <Text fontSize="sm" mt="1rem">
        Есть аккаунт?{" "}
        <ChakraLink to={routes.login} as={RouterLink} color="blue.200">
          Войти
        </ChakraLink>
      </Text>
    </FormLayout>
  );
};
