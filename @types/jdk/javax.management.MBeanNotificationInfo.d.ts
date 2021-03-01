declare namespace javax {
  namespace management {

    class MBeanNotificationInfo extends javax.management.MBeanFeatureInfo implements java.lang.Cloneable {

      static readonly serialVersionUID: long
      static readonly NO_NOTIFICATIONS: javax.management.MBeanNotificationInfo[]
      public constructor(arg0: java.lang.String[], arg1: java.lang.String, arg2: java.lang.String)
      public constructor(arg0: java.lang.String[], arg1: java.lang.String, arg2: java.lang.String, arg3: javax.management.Descriptor)
      public clone(): java.lang.Object
      public getNotifTypes(): java.lang.String[]
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
    }

  }
}
