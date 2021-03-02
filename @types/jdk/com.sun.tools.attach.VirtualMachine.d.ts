declare namespace com {
  namespace sun {
    namespace tools {
      namespace attach {

        abstract class VirtualMachine {
          protected constructor(arg0: com.sun.tools.attach.spi.AttachProvider, arg1: java.lang.String | string)
          public static list(): java.util.List<com.sun.tools.attach.VirtualMachineDescriptor>
          public static attach(arg0: java.lang.String | string): com.sun.tools.attach.VirtualMachine
          public static attach(arg0: com.sun.tools.attach.VirtualMachineDescriptor): com.sun.tools.attach.VirtualMachine
          public abstract detach(): void
          public provider(): com.sun.tools.attach.spi.AttachProvider
          public id(): java.lang.String
          public abstract loadAgentLibrary(arg0: java.lang.String | string, arg1: java.lang.String | string): void
          public loadAgentLibrary(arg0: java.lang.String | string): void
          public abstract loadAgentPath(arg0: java.lang.String | string, arg1: java.lang.String | string): void
          public loadAgentPath(arg0: java.lang.String | string): void
          public abstract loadAgent(arg0: java.lang.String | string, arg1: java.lang.String | string): void
          public loadAgent(arg0: java.lang.String | string): void
          public abstract getSystemProperties(): java.util.Properties
          public abstract getAgentProperties(): java.util.Properties
          public abstract startManagementAgent(arg0: java.util.Properties): void
          public abstract startLocalManagementAgent(): java.lang.String
          public hashCode(): number
          public equals(arg0: java.lang.Object | any): boolean
          public toString(): java.lang.String
        }

      }
    }
  }
}
