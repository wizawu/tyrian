declare namespace sun {
    namespace rmi {
        namespace server {
            class Activation$ActivationSystemImpl_Stub extends java.rmi.server.RemoteStub implements java.rmi.activation.ActivationSystem , java.rmi.Remote {
                public constructor(arg0: java.rmi.server.RemoteRef)
                public activeGroup(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationInstantiator, arg2: long): java.rmi.activation.ActivationMonitor
                public getActivationDesc(arg0: java.rmi.activation.ActivationID): java.rmi.activation.ActivationDesc
                public getActivationGroupDesc(arg0: java.rmi.activation.ActivationGroupID): java.rmi.activation.ActivationGroupDesc
                public registerGroup(arg0: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupID
                public registerObject(arg0: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationID
                public setActivationDesc(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationDesc
                public setActivationGroupDesc(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupDesc
                public shutdown(): void
                public unregisterGroup(arg0: java.rmi.activation.ActivationGroupID): void
                public unregisterObject(arg0: java.rmi.activation.ActivationID): void
                public static class: java.lang.Class<any>
            }
        }
    }
}