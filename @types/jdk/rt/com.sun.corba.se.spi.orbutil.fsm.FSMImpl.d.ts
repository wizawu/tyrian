declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orbutil {
                        namespace fsm {
                            class FSMImpl implements com.sun.corba.se.spi.orbutil.fsm.FSM {
                                public constructor(arg0: com.sun.corba.se.spi.orbutil.fsm.StateEngine, arg1: com.sun.corba.se.spi.orbutil.fsm.State)
                                public constructor(arg0: com.sun.corba.se.spi.orbutil.fsm.StateEngine, arg1: com.sun.corba.se.spi.orbutil.fsm.State, arg2: boolean)
                                public getState(): com.sun.corba.se.spi.orbutil.fsm.State
                                public doIt(arg0: com.sun.corba.se.spi.orbutil.fsm.Input): void
                                public internalSetState(arg0: com.sun.corba.se.spi.orbutil.fsm.State): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}