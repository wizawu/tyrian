declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace protocol {
                        class RetryType extends java.lang.Enum<com.sun.corba.se.spi.protocol.RetryType> {
                            public static NONE: com.sun.corba.se.spi.protocol.RetryType
                            public static BEFORE_RESPONSE: com.sun.corba.se.spi.protocol.RetryType
                            public static AFTER_RESPONSE: com.sun.corba.se.spi.protocol.RetryType
                            public static values(): com.sun.corba.se.spi.protocol.RetryType[]
                            public static valueOf(arg0: java.lang.String | string): com.sun.corba.se.spi.protocol.RetryType
                            public isRetry(): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}