import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { generatePath } from "react-router-dom";
import { useHistory } from "react-router-dom";
import tryCatchWithSentry from "../tryCatchWithSentry";
import withSentryId from "../withSentryId";
import * as S from "./style";

const throwSomeError = () => {
  throw new Error("Some error");
};

const Home = ({ generateSentryId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const { data } = useSelector((state) => state.todo);

  const onSubmit = (data) => {
    const url = generatePath("/todo/:id", { id: data.todoId });
    history.push(url);
  };
  const printData = (data) => {
    // return tryCatchWithSentry(() => {
    //     return data?.print();
    // });
    return data?.print();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.StyledInput
          {...register("todoId", { required: true })}
          placeholder="Enter todo id"
        />
        <S.StyledButton>Open Todo</S.StyledButton>
        <S.ErrorMessage>
          {errors.todoId && "Todo id is required"}
        </S.ErrorMessage>
        {printData(data)}
      </form>
      <S.StyledButton
        {...generateSentryId("throwSomeError")}
        onClick={() => {
          tryCatchWithSentry(throwSomeError, (err) => {
            console.warn("Error handled", err.name, err.message);
          });
        }}
      >
        Throw Some Error
      </S.StyledButton>
    </>
  );
};

export default withSentryId(Home);
