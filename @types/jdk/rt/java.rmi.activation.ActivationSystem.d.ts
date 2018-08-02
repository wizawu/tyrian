declare namespace java {
    namespace rmi {
        namespace activation {
interface ActivationSystem extends java.rmi.Remote {
    SYSTEM_PORT: int
    registerObject(arg0: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationID
    unregisterObject(arg0: java.rmi.activation.ActivationID): void
    registerGroup(arg0: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupID
    activeGroup(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationInstantiator, arg2: long): java.rmi.activation.ActivationMonitor
    unregisterGroup(arg0: java.rmi.activation.ActivationGroupID): void
    shutdown(): void
    setActivationDesc(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationDesc
    setActivationGroupDesc(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupDesc
    getActivationDesc(arg0: java.rmi.activation.ActivationID): java.rmi.activation.ActivationDesc
    getActivationGroupDesc(arg0: java.rmi.activation.ActivationGroupID): java.rmi.activation.ActivationGroupDesc
}

        }
    }
}