declare namespace java {
  namespace rmi {
    namespace activation {

      class ActivationDesc implements java.io.Serializable {
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.rmi.MarshalledObject<unknown>)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.rmi.MarshalledObject<unknown>, arg3: boolean)
        public constructor(arg0: java.rmi.activation.ActivationGroupID, arg1: java.lang.String, arg2: java.lang.String, arg3: java.rmi.MarshalledObject<unknown>)
        public constructor(arg0: java.rmi.activation.ActivationGroupID, arg1: java.lang.String, arg2: java.lang.String, arg3: java.rmi.MarshalledObject<unknown>, arg4: boolean)
        public getGroupID(): java.rmi.activation.ActivationGroupID
        public getClassName(): java.lang.String
        public getLocation(): java.lang.String
        public getData(): java.rmi.MarshalledObject<unknown>
        public getRestartMode(): boolean
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
      }

    }
  }
}
