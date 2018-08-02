declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace fsm {
                            class GuardedAction {
                                public constructor(arg0: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda, arg1: com.sun.corba.se.spi.orbutil.fsm.State)
                                public constructor(arg0: com.sun.corba.se.spi.orbutil.fsm.Guard | com.sun.corba.se.spi.orbutil.fsm.Guard$$Lambda, arg1: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda, arg2: com.sun.corba.se.spi.orbutil.fsm.State)
                                public toString(): string
                                public getAction(): com.sun.corba.se.spi.orbutil.fsm.Action
                                public getGuard(): com.sun.corba.se.spi.orbutil.fsm.Guard
                                public getNextState(): com.sun.corba.se.spi.orbutil.fsm.State
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}