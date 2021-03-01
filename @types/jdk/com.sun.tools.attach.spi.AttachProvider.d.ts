declare namespace com {
  namespace sun {
    namespace tools {
      namespace attach {
        namespace spi {

          abstract class AttachProvider {

            protected constructor()
            public abstract name(): java.lang.String
            public abstract type(): java.lang.String
            public abstract attachVirtualMachine(arg0: java.lang.String): com.sun.tools.attach.VirtualMachine
            public attachVirtualMachine(arg0: com.sun.tools.attach.VirtualMachineDescriptor): com.sun.tools.attach.VirtualMachine
            public abstract listVirtualMachines(): java.util.List<com.sun.tools.attach.VirtualMachineDescriptor>
            public static providers(): java.util.List<com.sun.tools.attach.spi.AttachProvider>
          }

        }
      }
    }
  }
}
