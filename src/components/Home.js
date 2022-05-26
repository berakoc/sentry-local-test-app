import { useForm } from 'react-hook-form';
import { generatePath } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as S from './style';

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const url = generatePath('/todo/:id', { id: data.todoId });
        history.push(url);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <S.StyledInput {...register('todoId', { required: true })} placeholder='Enter todo id' />
            <S.StyledButton>Open Todo</S.StyledButton>
            <S.ErrorMessage>{errors.todoId && 'Todo id is required'}</S.ErrorMessage>
        </form>
    );
}

export default Home;