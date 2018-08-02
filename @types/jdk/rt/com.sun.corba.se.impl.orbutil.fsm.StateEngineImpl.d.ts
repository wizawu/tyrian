declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace fsm {
                            class StateEngineImpl implements com.sun.corba.se.spi.orbutil.fsm.StateEngine {
                                public constructor()
                                public add(arg0: com.sun.corba.se.spi.orbutil.fsm.State, arg1: com.sun.corba.se.spi.orbutil.fsm.Input, arg2: com.sun.corba.se.spi.orbutil.fsm.Guard | com.sun.corba.se.spi.orbutil.fsm.Guard$$Lambda, arg3: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda, arg4: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                public add(arg0: com.sun.corba.se.spi.orbutil.fsm.State, arg1: com.sun.corba.se.spi.orbutil.fsm.Input, arg2: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda, arg3: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                public setDefault(arg0: com.sun.corba.se.spi.orbutil.fsm.State, arg1: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda, arg2: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                public setDefault(arg0: com.sun.corba.se.spi.orbutil.fsm.State, arg1: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                public setDefault(arg0: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                public done(): void
                                public setDefaultAction(arg0: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda): void
                                public doIt(arg0: com.sun.corba.se.spi.orbutil.fsm.FSM, arg1: com.sun.corba.se.spi.orbutil.fsm.Input, arg2: boolean): void
                                public makeFSM(arg0: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.FSM
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}