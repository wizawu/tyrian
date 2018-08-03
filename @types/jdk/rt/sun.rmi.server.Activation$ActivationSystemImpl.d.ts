declare namespace sun {
    namespace rmi {
        namespace server {
            class Activation$ActivationSystemImpl extends java.rmi.server.RemoteServer implements java.rmi.activation.ActivationSystem {
                public registerObject(arg0: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationID
                public unregisterObject(arg0: java.rmi.activation.ActivationID): void
                public registerGroup(arg0: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupID
                public activeGroup(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationInstantiator | java.rmi.activation.ActivationInstantiator$$Lambda, arg2: long): java.rmi.activation.ActivationMonitor
                public unregisterGroup(arg0: java.rmi.activation.ActivationGroupID): void
                public setActivationDesc(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationDesc
                public setActivationGroupDesc(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupDesc
                public getActivationDesc(arg0: java.rmi.activation.ActivationID): java.rmi.activation.ActivationDesc
                public getActivationGroupDesc(arg0: java.rmi.activation.ActivationGroupID): java.rmi.activation.ActivationGroupDesc
                public shutdown(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}