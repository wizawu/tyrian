declare namespace java {
  namespace rmi {
    namespace activation {
      class ActivationGroupDesc implements java.io.Serializable {
        public constructor(arg0: java.util.Properties, arg1: java.rmi.activation.ActivationGroupDesc$CommandEnvironment)
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.rmi.MarshalledObject<unknown>,
          arg3: java.util.Properties,
          arg4: java.rmi.activation.ActivationGroupDesc$CommandEnvironment
        )
        public getClassName(): java.lang.String
        public getLocation(): java.lang.String
        public getData(): java.rmi.MarshalledObject<unknown>
        public getPropertyOverrides(): java.util.Properties
        public getCommandEnvironment(): java.rmi.activation.ActivationGroupDesc$CommandEnvironment
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }
    }
  }
}
