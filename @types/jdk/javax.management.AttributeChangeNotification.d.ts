declare namespace javax {
  namespace management {

    class AttributeChangeNotification extends javax.management.Notification {
      public static readonly ATTRIBUTE_CHANGE: java.lang.String
      public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Long, arg2: number | java.lang.Long, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.Object | any, arg7: java.lang.Object | any)
      public getAttributeName(): java.lang.String
      public getAttributeType(): java.lang.String
      public getOldValue(): java.lang.Object
      public getNewValue(): java.lang.Object
    }

  }
}
