declare namespace javax {
    namespace management {
        interface NotificationFilter extends java.io.Serializable {
            isNotificationEnabled(arg0: javax.management.Notification): boolean
        }
        interface NotificationFilter$$Lambda extends java.io.Serializable {
            (arg0: javax.management.Notification): boolean
        }
    }
}