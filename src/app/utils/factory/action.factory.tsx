const actionFactory = ( type: string, ...argNames ) => {

    return ( ...args ): any[] => {

        const action: any = { type };

        argNames.forEach( ( arg: any, index: any ): void => {
            action[ argNames[ index ] ] = args[ index ];
        });

        return action;
    };
};

export default actionFactory;