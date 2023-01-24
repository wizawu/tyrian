declare namespace com {
  namespace sun {
    namespace tools {
      namespace jconsole {
        interface JConsoleContext {
          readonly CONNECTION_STATE_PROPERTY: java.lang.String
          getMBeanServerConnection(): javax.management.MBeanServerConnection
          getConnectionState(): com.sun.tools.jconsole.JConsoleContext$ConnectionState
          addPropertyChangeListener(
            arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
          ): void
          removePropertyChangeListener(
            arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
          ): void
        }
      }
    }
  }
}
