declare namespace java {
  namespace rmi {
    namespace activation {

      interface Activator$$lambda {
        (arg0: java.rmi.activation.ActivationID, arg1: boolean): java.rmi.MarshalledObject<java.rmi.Remote>
      }

      interface Activator extends java.rmi.Remote {
        activate(arg0: java.rmi.activation.ActivationID, arg1: boolean): java.rmi.MarshalledObject<java.rmi.Remote>
      }

    }
  }
}
