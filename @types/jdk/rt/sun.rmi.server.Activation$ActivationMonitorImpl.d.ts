declare namespace sun {
    namespace rmi {
        namespace server {
            class Activation$ActivationMonitorImpl extends java.rmi.server.UnicastRemoteObject implements java.rmi.activation.ActivationMonitor {
                public inactiveObject(arg0: java.rmi.activation.ActivationID): void
                public activeObject(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.MarshalledObject<java.rmi.Remote>): void
                public inactiveGroup(arg0: java.rmi.activation.ActivationGroupID, arg1: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}