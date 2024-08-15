import { Input, Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useCurrentUser } from "shared";

import { SelectStatus } from "./select-status";
import { useSearchForm } from "./use-search-form";

export const SearchForm = () => {
  const { register, onSubmit, clearParams, initialValue } = useSearchForm();
  const { isAdmin } = useCurrentUser();
  return (
    <Grid
      as="form"
      mb="2rem"
      templateColumns={`repeat(${isAdmin ? "6" : "5"}, 1fr)`}
      gap={4}
      justifyItems="center"
      onSubmit={onSubmit}
    >
      <GridItem w="100%">
        <Input
          variant="filled"
          placeholder="ID тикета"
          size="md"
          defaultValue={initialValue._id}
          {...register("_id")}
        />
      </GridItem>
      {isAdmin && (
        <GridItem w="100%">
          <Input
            variant="filled"
            placeholder="ID пользователя"
            size="md"
            defaultValue={initialValue.creator}
            {...register("creator")}
          />
        </GridItem>
      )}
      <GridItem w="100%">
        <Input
          variant="filled"
          placeholder="Дата создания"
          size="md"
          type="datetime-local"
          defaultValue={initialValue.createdAt}
          {...register("createdAt")}
        />
      </GridItem>
      <GridItem w="100%">
        <Input
          variant="filled"
          placeholder="Дата обновления"
          size="md"
          type="datetime-local"
          defaultValue={initialValue.updatedAt}
          {...register("updatedAt")}
        />
      </GridItem>
      <GridItem w="100%">
        <SelectStatus
          variant="filled"
          {...register("status")}
          defaultValue={initialValue.status}
        />
      </GridItem>
      <GridItem w="100%">
        <HStack>
          <Button type="reset" colorScheme="red" onClick={() => clearParams()}>
            Сбросить
          </Button>
          <Button type="submit" colorScheme="blue">
            Отправить
          </Button>
        </HStack>
      </GridItem>
    </Grid>
  );
};
