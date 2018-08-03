declare namespace javax {
    namespace management {
        class AttributeChangeNotification extends javax.management.Notification {
            public static readonly ATTRIBUTE_CHANGE: string
            public constructor(arg0: java.lang.Object, arg1: long, arg2: long, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.Object, arg7: java.lang.Object)
            public getAttributeName(): string
            public getAttributeType(): string
            public getOldValue(): java.lang.Object
            public getNewValue(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}