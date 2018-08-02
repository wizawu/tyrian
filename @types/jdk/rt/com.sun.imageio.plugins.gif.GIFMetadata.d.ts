declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace gif {
                    abstract class GIFMetadata extends javax.imageio.metadata.IIOMetadata {
                        protected static fatal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): void
                        protected static getStringAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: java.lang.String[]): string
                        protected static getIntAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int, arg3: boolean, arg4: boolean, arg5: int, arg6: int): int
                        protected static getFloatAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: float, arg3: boolean): float
                        protected static getIntAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: boolean, arg3: int, arg4: int): int
                        protected static getFloatAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): float
                        protected static getBooleanAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: boolean, arg3: boolean): boolean
                        protected static getBooleanAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): boolean
                        protected static getEnumeratedAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String[], arg3: int, arg4: boolean): int
                        protected static getEnumeratedAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String[]): int
                        protected static getAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): string
                        protected static getAttribute(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): string
                        protected constructor(arg0: boolean, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String[])
                        public mergeTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
                        protected getColorTable(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: boolean, arg3: int): byte[]
                        protected mergeNativeTree(arg0: org.w3c.dom.Node): void
                        protected mergeStandardTree(arg0: org.w3c.dom.Node): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}