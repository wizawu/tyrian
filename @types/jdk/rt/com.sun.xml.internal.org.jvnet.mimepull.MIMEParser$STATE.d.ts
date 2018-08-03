declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace mimepull {
                            class MIMEParser$STATE extends java.lang.Enum<com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE> {
                                public static readonly START_MESSAGE: com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE
                                public static readonly SKIP_PREAMBLE: com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE
                                public static readonly START_PART: com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE
                                public static readonly HEADERS: com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE
                                public static readonly BODY: com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE
                                public static readonly END_PART: com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE
                                public static readonly END_MESSAGE: com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE
                                public static values(): com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE[]
                                public static valueOf(arg0: java.lang.String | string): com.sun.xml.internal.org.jvnet.mimepull.MIMEParser$STATE
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}