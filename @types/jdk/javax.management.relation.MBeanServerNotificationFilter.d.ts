declare namespace javax {
  namespace management {
    namespace relation {

      class MBeanServerNotificationFilter extends javax.management.NotificationFilterSupport {
        public constructor()
        public disableAllObjectNames(): void
        public disableObjectName(arg0: javax.management.ObjectName): void
        public enableAllObjectNames(): void
        public enableObjectName(arg0: javax.management.ObjectName): void
        public getEnabledObjectNames(): java.util.Vector<javax.management.ObjectName>
        public getDisabledObjectNames(): java.util.Vector<javax.management.ObjectName>
        public isNotificationEnabled(arg0: javax.management.Notification): boolean
      }

    }
  }
}
