declare namespace javax {
    namespace rmi {
        namespace CORBA {
            interface Tie extends org.omg.CORBA.portable.InvokeHandler {
                thisObject(): org.omg.CORBA.Object
                deactivate(): void
                orb(): org.omg.CORBA.ORB
                orb(arg0: org.omg.CORBA.ORB): void
                setTarget(arg0: java.rmi.Remote): void
                getTarget(): java.rmi.Remote
            }
        }
    }
}