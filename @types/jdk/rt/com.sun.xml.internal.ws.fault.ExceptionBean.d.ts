declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace fault {
                        class ExceptionBean {
                            public className: string
                            public message: string
                            public stackTrace: java.util.List<com.sun.xml.internal.ws.fault.ExceptionBean$StackFrame>
                            public cause: com.sun.xml.internal.ws.fault.ExceptionBean
                            public note: string
                            public static marshal(arg0: java.lang.Throwable, arg1: org.w3c.dom.Node): void
                            public static unmarshal(arg0: org.w3c.dom.Node): com.sun.xml.internal.ws.developer.ServerSideException
                            public static isStackTraceXml(arg0: org.w3c.dom.Element): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}