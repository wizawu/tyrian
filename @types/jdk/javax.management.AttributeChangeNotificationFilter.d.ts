declare namespace javax {
  namespace management {

    class AttributeChangeNotificationFilter implements javax.management.NotificationFilter {
      public constructor()
      public isNotificationEnabled(arg0: javax.management.Notification): boolean
      public enableAttribute(arg0: java.lang.String | string): void
      public disableAttribute(arg0: java.lang.String | string): void
      public disableAllAttributes(): void
      public getEnabledAttributes(): java.util.Vector<java.lang.String>
    }

  }
}
