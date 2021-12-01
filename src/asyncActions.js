const {useDispatch} = require("react-redux");
const {useMemo} = require("react");

export function useActionCreator(actionCreator) {
    const dispatch = useDispatch();
    return useMemo(() => {
        switch (actionCreator.length) {
            case 1: return (p1) => dispatch(actionCreator(p1));
            case 2: return (p1, p2) => dispatch(actionCreator(p1, p2));
            default: throw `Unsupported params lengths: ${actionCreator.name}(${actionCreator.length})`
        }
    }, [actionCreator])
}