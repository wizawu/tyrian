declare namespace jdk {
  namespace jshell {
    namespace execution {

      class JdiInitiator {

        public constructor(arg0: int, arg1: java.util.List<java.lang.String>, arg2: java.lang.String, arg3: boolean, arg4: java.lang.String, arg5: int, arg6: java.util.Map<java.lang.String,java.lang.String>)
        public vm(): com.sun.jdi.VirtualMachine
        public process(): java.lang.Process
        timedVirtualMachineCreation(arg0: java.util.concurrent.Callable<com.sun.jdi.VirtualMachine>, arg1: java.util.concurrent.Callable<java.lang.Integer>): com.sun.jdi.VirtualMachine
      }

    }
  }
}
