import create from "zustand";

export const userState = create( ( set ) => ( {
    
    session: { isValid: false }, //  var session = false
    
    addSession: ( key ) =>
        set( ( state ) => ( {
                       //session: {isValid: false}, session: {isValid : true}
            session : {...state.session, isValid: key.isValid  }
        } ) ),
    
    removeSession: () =>
        set( ( state ) => ( {
            session : {...state.session, isValid : false}
        }))
    
} ) )

