declare namespace javax {
  namespace management {
    namespace remote {

      class JMXConnectionNotification extends javax.management.Notification {
        public static readonly OPENED: java.lang.String
        public static readonly CLOSED: java.lang.String
        public static readonly FAILED: java.lang.String
        public static readonly NOTIFS_LOST: java.lang.String
        public constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: java.lang.String, arg3: long, arg4: java.lang.String, arg5: java.lang.Object)
        public getConnectionId(): java.lang.String
      }

    }
  }
}
