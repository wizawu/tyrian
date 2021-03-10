declare namespace javax {
  namespace management {

    class MBeanNotificationInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {
      static readonly serialVersionUID: long
      static readonly NO_NOTIFICATIONS: javax.management.MBeanNotificationInfo[]
      public constructor(arg0: java.lang.String[] | string[], arg1: java.lang.String | string, arg2: java.lang.String | string)
      public constructor(arg0: java.lang.String[] | string[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: javax.management.Descriptor)
      public clone(): java.lang.Object
      public getNotifTypes(): java.lang.String[]
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }

  }
}
