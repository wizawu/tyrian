declare namespace javax {
  namespace management {
    namespace modelmbean {
      class RequiredModelMBean
        implements
          javax.management.modelmbean.ModelMBean,
          javax.management.MBeanRegistration,
          javax.management.NotificationEmitter
      {
        modelMBeanInfo: javax.management.modelmbean.ModelMBeanInfo
        public constructor()
        public constructor(arg0: javax.management.modelmbean.ModelMBeanInfo)
        public setModelMBeanInfo(arg0: javax.management.modelmbean.ModelMBeanInfo): void
        public setManagedResource(arg0: java.lang.Object | any, arg1: java.lang.String | string): void
        public load(): void
        public store(): void
        public getMBeanInfo(): javax.management.MBeanInfo
        public invoke(
          arg0: java.lang.String | string,
          arg1: java.lang.Object[] | any[],
          arg2: java.lang.String[] | string[]
        ): java.lang.Object
        public getAttribute(arg0: java.lang.String | string): java.lang.Object
        public getAttributes(arg0: java.lang.String[] | string[]): javax.management.AttributeList
        public setAttribute(arg0: javax.management.Attribute): void
        public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
        public addNotificationListener(
          arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
          arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
          arg2: java.lang.Object | any
        ): void
        public removeNotificationListener(
          arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda
        ): void
        public removeNotificationListener(
          arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
          arg1: javax.management.NotificationFilter | javax.management.NotificationFilter$$lambda,
          arg2: java.lang.Object | any
        ): void
        public sendNotification(arg0: javax.management.Notification): void
        public sendNotification(arg0: java.lang.String | string): void
        public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
        public addAttributeChangeNotificationListener(
          arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any
        ): void
        public removeAttributeChangeNotificationListener(
          arg0: javax.management.NotificationListener | javax.management.NotificationListener$$lambda,
          arg1: java.lang.String | string
        ): void
        public sendAttributeChangeNotification(arg0: javax.management.AttributeChangeNotification): void
        public sendAttributeChangeNotification(arg0: javax.management.Attribute, arg1: javax.management.Attribute): void
        protected getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository
        public preRegister(
          arg0: javax.management.MBeanServer,
          arg1: javax.management.ObjectName
        ): javax.management.ObjectName
        public postRegister(arg0: boolean | java.lang.Boolean): void
        public preDeregister(): void
        public postDeregister(): void
      }
    }
  }
}
