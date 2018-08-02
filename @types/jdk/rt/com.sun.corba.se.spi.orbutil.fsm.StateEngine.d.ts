declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orbutil {
                        namespace fsm {
                            interface StateEngine {
                                add(arg0: com.sun.corba.se.spi.orbutil.fsm.State, arg1: com.sun.corba.se.spi.orbutil.fsm.Input, arg2: com.sun.corba.se.spi.orbutil.fsm.Guard | com.sun.corba.se.spi.orbutil.fsm.Guard$$Lambda, arg3: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda, arg4: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                add(arg0: com.sun.corba.se.spi.orbutil.fsm.State, arg1: com.sun.corba.se.spi.orbutil.fsm.Input, arg2: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda, arg3: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                setDefault(arg0: com.sun.corba.se.spi.orbutil.fsm.State, arg1: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda, arg2: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                setDefault(arg0: com.sun.corba.se.spi.orbutil.fsm.State, arg1: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                setDefault(arg0: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.StateEngine
                                setDefaultAction(arg0: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda): void
                                done(): void
                                makeFSM(arg0: com.sun.corba.se.spi.orbutil.fsm.State): com.sun.corba.se.spi.orbutil.fsm.FSM
                            }
                        }
                    }
                }
            }
        }
    }
}