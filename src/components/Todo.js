import { pick } from 'lodash';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import * as TodoActions from './actions';
import * as S from './style';

const Todo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => state.todo);
    const history = useHistory();
    useEffect(() => {
        dispatch(TodoActions.getTodoRequest(id));
    }, [dispatch, id]);
    return (
        <div>
            <S.StyledButton onClick={() => {
                history.goBack();
            }}>
                Go back
            </S.StyledButton>
            {isLoading ? 'Loading...' : error ? 'Oops' : 'Ready'}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            {error && <pre>{JSON.stringify(pick(error, ['name', 'message']), null, 2)}</pre>}
        </div>
    )
}

export default Todo;
