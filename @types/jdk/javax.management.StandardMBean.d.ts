declare namespace javax {
  namespace management {

    class StandardMBean implements javax.management.DynamicMBean, javax.management.MBeanRegistration {
      public constructor(arg0: T, arg1: java.lang.Class<T>)
      protected constructor(arg0: java.lang.Class<unknown>)
      public constructor(arg0: T, arg1: java.lang.Class<T>, arg2: boolean | java.lang.Boolean)
      protected constructor(arg0: java.lang.Class<unknown>, arg1: boolean | java.lang.Boolean)
      public setImplementation(arg0: java.lang.Object | any): void
      public getImplementation(): java.lang.Object
      public getMBeanInterface(): java.lang.Class<unknown>
      public getImplementationClass(): java.lang.Class<unknown>
      public getAttribute(arg0: java.lang.String | string): java.lang.Object
      public setAttribute(arg0: javax.management.Attribute): void
      public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
      public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
      public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
      public getMBeanInfo(): javax.management.MBeanInfo
      protected getClassName(arg0: javax.management.MBeanInfo): java.lang.String
      protected getDescription(arg0: javax.management.MBeanInfo): java.lang.String
      protected getDescription(arg0: javax.management.MBeanFeatureInfo): java.lang.String
      protected getDescription(arg0: javax.management.MBeanAttributeInfo): java.lang.String
      protected getDescription(arg0: javax.management.MBeanConstructorInfo): java.lang.String
      protected getDescription(arg0: javax.management.MBeanConstructorInfo, arg1: javax.management.MBeanParameterInfo, arg2: number | java.lang.Integer): java.lang.String
      protected getParameterName(arg0: javax.management.MBeanConstructorInfo, arg1: javax.management.MBeanParameterInfo, arg2: number | java.lang.Integer): java.lang.String
      protected getDescription(arg0: javax.management.MBeanOperationInfo): java.lang.String
      protected getImpact(arg0: javax.management.MBeanOperationInfo): number
      protected getParameterName(arg0: javax.management.MBeanOperationInfo, arg1: javax.management.MBeanParameterInfo, arg2: number | java.lang.Integer): java.lang.String
      protected getDescription(arg0: javax.management.MBeanOperationInfo, arg1: javax.management.MBeanParameterInfo, arg2: number | java.lang.Integer): java.lang.String
      protected getConstructors(arg0: javax.management.MBeanConstructorInfo[], arg1: java.lang.Object | any): javax.management.MBeanConstructorInfo[]
      getNotifications(arg0: javax.management.MBeanInfo): javax.management.MBeanNotificationInfo[]
      getDescriptor(arg0: javax.management.MBeanInfo, arg1: boolean | java.lang.Boolean): javax.management.Descriptor
      protected getCachedMBeanInfo(): javax.management.MBeanInfo
      protected cacheMBeanInfo(arg0: javax.management.MBeanInfo): void
      public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
      public postRegister(arg0: boolean | java.lang.Boolean): void
      public preDeregister(): void
      public postDeregister(): void
      static immutableInfo(arg0: java.lang.Class<javax.management.StandardMBean>): boolean
      static overrides(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>, arg2: java.lang.String | string, ...vargs: (java.lang.Class<unknown>)[]): boolean
    }

  }
}
