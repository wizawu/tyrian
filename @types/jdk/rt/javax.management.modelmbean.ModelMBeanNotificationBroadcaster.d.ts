declare namespace javax {
    namespace management {
        namespace modelmbean {
            interface ModelMBeanNotificationBroadcaster extends javax.management.NotificationBroadcaster {
                sendNotification(arg0: javax.management.Notification): void
                sendNotification(arg0: java.lang.String | string): void
                sendAttributeChangeNotification(arg0: javax.management.AttributeChangeNotification): void
                sendAttributeChangeNotification(arg0: javax.management.Attribute, arg1: javax.management.Attribute): void
                addAttributeChangeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: java.lang.String | string, arg2: java.lang.Object): void
                removeAttributeChangeNotificationListener(arg0: javax.management.NotificationListener | javax.management.NotificationListener$$Lambda, arg1: java.lang.String | string): void
            }
        }
    }
}