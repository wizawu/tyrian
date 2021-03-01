declare namespace javax {
  namespace management {
    namespace remote {

      class NotificationResult implements java.io.Serializable {

        public constructor(arg0: long, arg1: long, arg2: javax.management.remote.TargetedNotification[])
        public getEarliestSequenceNumber(): long
        public getNextSequenceNumber(): long
        public getTargetedNotifications(): javax.management.remote.TargetedNotification[]
        public toString(): java.lang.String
      }

    }
  }
}
