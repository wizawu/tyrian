declare namespace javax {
  namespace management {
    namespace remote {

      interface MBeanServerForwarder extends javax.management.MBeanServer {

        getMBeanServer(): javax.management.MBeanServer
        setMBeanServer(arg0: javax.management.MBeanServer): void
      }

    }
  }
}
