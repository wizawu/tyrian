declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orbutil {
                        namespace fsm {
class StateImpl extends com.sun.corba.se.impl.orbutil.fsm.NameBase implements com.sun.corba.se.spi.orbutil.fsm.State {
    public constructor(arg0: java.lang.String | string)
    public preAction(arg0: com.sun.corba.se.spi.orbutil.fsm.FSM): void
    public postAction(arg0: com.sun.corba.se.spi.orbutil.fsm.FSM): void
    public getDefaultNextState(): com.sun.corba.se.spi.orbutil.fsm.State
    public setDefaultNextState(arg0: com.sun.corba.se.spi.orbutil.fsm.State): void
    public getDefaultAction(): com.sun.corba.se.spi.orbutil.fsm.Action
    public setDefaultAction(arg0: com.sun.corba.se.spi.orbutil.fsm.Action | com.sun.corba.se.spi.orbutil.fsm.Action$$Lambda): void
    public addGuardedAction(arg0: com.sun.corba.se.spi.orbutil.fsm.Input, arg1: com.sun.corba.se.impl.orbutil.fsm.GuardedAction): void
    public getGuardedActions(arg0: com.sun.corba.se.spi.orbutil.fsm.Input): java.util.Set
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}