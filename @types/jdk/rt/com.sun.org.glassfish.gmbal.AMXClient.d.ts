declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace gmbal {
                    class AMXClient implements com.sun.org.glassfish.gmbal.AMXMBeanInterface {
                        public static readonly NULL_OBJECTNAME: javax.management.ObjectName
                        public equals(arg0: java.lang.Object): boolean
                        public hashCode(): int
                        public toString(): string
                        public constructor(arg0: javax.management.MBeanServerConnection, arg1: javax.management.ObjectName)
                        public getName(): string
                        public getMeta(): java.util.Map<java.lang.String, any>
                        public getParent(): com.sun.org.glassfish.gmbal.AMXClient
                        public getChildren(): com.sun.org.glassfish.gmbal.AMXClient[]
                        public getAttribute(arg0: java.lang.String | string): java.lang.Object
                        public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public setAttribute(arg0: javax.management.Attribute): void
                        public getAttributes(arg0: java.lang.String[]): javax.management.AttributeList
                        public setAttributes(arg0: javax.management.AttributeList): javax.management.AttributeList
                        public invoke(arg0: java.lang.String | string, arg1: java.lang.Object[], arg2: java.lang.String[]): java.lang.Object
                        public getMBeanInfo(): javax.management.MBeanInfo
                        public objectName(): javax.management.ObjectName
                        public getChildren(): com.sun.org.glassfish.gmbal.AMXMBeanInterface[]
                        public getParent(): com.sun.org.glassfish.gmbal.AMXMBeanInterface
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}