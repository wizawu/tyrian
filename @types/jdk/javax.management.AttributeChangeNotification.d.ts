declare namespace javax {
  namespace management {

    class AttributeChangeNotification extends javax.management.Notification {

      public static readonly ATTRIBUTE_CHANGE: java.lang.String
      public constructor(arg0: java.lang.Object, arg1: long, arg2: long, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String, arg6: java.lang.Object, arg7: java.lang.Object)
      public getAttributeName(): java.lang.String
      public getAttributeType(): java.lang.String
      public getOldValue(): java.lang.Object
      public getNewValue(): java.lang.Object
    }

  }
}
