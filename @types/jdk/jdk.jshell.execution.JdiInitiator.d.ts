declare namespace jdk {
  namespace jshell {
    namespace execution {
      class JdiInitiator {
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: java.util.List<java.lang.String>,
          arg2: java.lang.String | string,
          arg3: boolean | java.lang.Boolean,
          arg4: java.lang.String | string,
          arg5: number | java.lang.Integer,
          arg6: java.util.Map<java.lang.String, java.lang.String>
        )
        public vm(): com.sun.jdi.VirtualMachine
        public process(): java.lang.Process
        timedVirtualMachineCreation(
          arg0:
            | java.util.concurrent.Callable<com.sun.jdi.VirtualMachine>
            | java.util.concurrent.Callable$$lambda<com.sun.jdi.VirtualMachine>,
          arg1:
            | java.util.concurrent.Callable<java.lang.Integer>
            | java.util.concurrent.Callable$$lambda<java.lang.Integer>
        ): com.sun.jdi.VirtualMachine
      }
    }
  }
}
