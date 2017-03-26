const reducerFactory = ( reducerFunction: Function, reducerName: string ): Function => {

    return ( state:any, action: string ):any => {

        const name = action;
        const isInitializationCall:any = state === undefined;

        if ( name !== reducerName && !isInitializationCall ) return state;

        return reducerFunction( state, action );

    };

};

export default reducerFactory;