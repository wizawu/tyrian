declare namespace javax {
  namespace management {
    namespace remote {
      class JMXConnectionNotification extends javax.management.Notification {
        public static readonly OPENED: java.lang.String
        public static readonly CLOSED: java.lang.String
        public static readonly FAILED: java.lang.String
        public static readonly NOTIFS_LOST: java.lang.String
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.Object | any,
          arg2: java.lang.String | string,
          arg3: number | java.lang.Long,
          arg4: java.lang.String | string,
          arg5: java.lang.Object | any
        )
        public getConnectionId(): java.lang.String
      }
    }
  }
}
