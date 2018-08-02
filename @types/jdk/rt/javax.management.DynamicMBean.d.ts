declare namespace javax {
    namespace management {
        interface DynamicMBean {
            getAttribute(arg0: java.lang.String | string): java.lang.Object
            setAttribute(arg0: javax.management.Attribute): void
            getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
            setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
            invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
            getMBeanInfo(): javax.management.MBeanInfo
        }
    }
}