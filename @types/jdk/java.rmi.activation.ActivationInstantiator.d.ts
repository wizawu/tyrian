declare namespace java {
  namespace rmi {
    namespace activation {

      interface ActivationInstantiator$$lambda {
        (arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.MarshalledObject<java.rmi.Remote>
      }

      interface ActivationInstantiator extends java.rmi.Remote {
        newInstance(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.MarshalledObject<java.rmi.Remote>
      }

    }
  }
}
