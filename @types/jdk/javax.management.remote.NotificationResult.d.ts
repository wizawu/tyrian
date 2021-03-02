declare namespace javax {
  namespace management {
    namespace remote {

      class NotificationResult implements java.io.Serializable {
        public constructor(arg0: number | java.lang.Long, arg1: number | java.lang.Long, arg2: javax.management.remote.TargetedNotification[])
        public getEarliestSequenceNumber(): number
        public getNextSequenceNumber(): number
        public getTargetedNotifications(): javax.management.remote.TargetedNotification[]
        public toString(): java.lang.String
      }

    }
  }
}
