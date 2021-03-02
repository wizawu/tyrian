declare namespace java {
  namespace rmi {
    namespace activation {

      interface ActivationMonitor extends java.rmi.Remote {
        inactiveObject(arg0: java.rmi.activation.ActivationID): void
        activeObject(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.MarshalledObject<java.rmi.Remote>): void
        inactiveGroup(arg0: java.rmi.activation.ActivationGroupID, arg1: long): void
      }

    }
  }
}
