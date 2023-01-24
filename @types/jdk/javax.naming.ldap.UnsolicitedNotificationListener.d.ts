declare namespace javax {
  namespace naming {
    namespace ldap {
      interface UnsolicitedNotificationListener extends javax.naming.event.NamingListener {
        notificationReceived(arg0: javax.naming.ldap.UnsolicitedNotificationEvent): void
      }
    }
  }
}
