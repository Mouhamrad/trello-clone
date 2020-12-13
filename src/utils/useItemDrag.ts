import { useDrag } from 'react-dnd';
import { useAppState } from '../AppStateContext';
import { DragItem } from '../components/DragItem';

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState();
    const [, drag] = useDrag({
        item,
        begin: () =>
            dispatch({
                type: 'SET_DRAGGED_ITEM',
                payload: item,
            }),
        end: () => dispatch({ type: 'SET_DRAGGED_ITEM' }),
    });
    return { drag };
};