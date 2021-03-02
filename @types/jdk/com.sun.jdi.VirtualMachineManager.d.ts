declare namespace com {
  namespace sun {
    namespace jdi {

      interface VirtualMachineManager {
        defaultConnector(): com.sun.jdi.connect.LaunchingConnector
        launchingConnectors(): java.util.List<com.sun.jdi.connect.LaunchingConnector>
        attachingConnectors(): java.util.List<com.sun.jdi.connect.AttachingConnector>
        listeningConnectors(): java.util.List<com.sun.jdi.connect.ListeningConnector>
        allConnectors(): java.util.List<com.sun.jdi.connect.Connector>
        connectedVirtualMachines(): java.util.List<com.sun.jdi.VirtualMachine>
        majorInterfaceVersion(): number
        minorInterfaceVersion(): number
        createVirtualMachine(arg0: com.sun.jdi.connect.spi.Connection, arg1: java.lang.Process): com.sun.jdi.VirtualMachine
        createVirtualMachine(arg0: com.sun.jdi.connect.spi.Connection): com.sun.jdi.VirtualMachine
      }

    }
  }
}
