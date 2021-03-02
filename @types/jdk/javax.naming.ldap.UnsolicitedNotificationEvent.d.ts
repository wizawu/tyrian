declare namespace javax {
  namespace naming {
    namespace ldap {

      class UnsolicitedNotificationEvent extends java.util.EventObject {
        public constructor(arg0: java.lang.Object | any, arg1: javax.naming.ldap.UnsolicitedNotification)
        public getNotification(): javax.naming.ldap.UnsolicitedNotification
        public dispatch(arg0: javax.naming.ldap.UnsolicitedNotificationListener): void
      }

    }
  }
}
