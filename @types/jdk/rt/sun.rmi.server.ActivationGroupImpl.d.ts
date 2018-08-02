declare namespace sun {
    namespace rmi {
        namespace server {
class ActivationGroupImpl extends java.rmi.activation.ActivationGroup {
    public constructor(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.MarshalledObject<any>)
    public newInstance(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.MarshalledObject<java.rmi.Remote>
    public inactiveObject(arg0: java.rmi.activation.ActivationID): boolean
    public activeObject(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.Remote): void
    public static class: java.lang.Class<any>
}

        }
    }
}