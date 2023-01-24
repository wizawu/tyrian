declare namespace java {
  namespace rmi {
    namespace activation {
      abstract class ActivationGroup
        extends java.rmi.server.UnicastRemoteObject
        implements java.rmi.activation.ActivationInstantiator
      {
        protected constructor(arg0: java.rmi.activation.ActivationGroupID)
        public inactiveObject(arg0: java.rmi.activation.ActivationID): boolean
        public abstract activeObject(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.Remote): void
        public static createGroup(
          arg0: java.rmi.activation.ActivationGroupID,
          arg1: java.rmi.activation.ActivationGroupDesc,
          arg2: number | java.lang.Long
        ): java.rmi.activation.ActivationGroup
        public static currentGroupID(): java.rmi.activation.ActivationGroupID
        static internalCurrentGroupID(): java.rmi.activation.ActivationGroupID
        public static setSystem(arg0: java.rmi.activation.ActivationSystem): void
        public static getSystem(): java.rmi.activation.ActivationSystem
        protected activeObject(
          arg0: java.rmi.activation.ActivationID,
          arg1: java.rmi.MarshalledObject<java.rmi.Remote>
        ): void
        protected inactiveGroup(): void
        static currentGroup(): java.rmi.activation.ActivationGroup
      }
    }
  }
}
