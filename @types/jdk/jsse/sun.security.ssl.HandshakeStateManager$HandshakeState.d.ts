declare namespace sun {
    namespace security {
        namespace ssl {
            class HandshakeStateManager$HandshakeState extends java.lang.Enum<sun.security.ssl.HandshakeStateManager$HandshakeState> {
                public static readonly HS_HELLO_REQUEST: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_CLIENT_HELLO: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_SERVER_HELLO: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_SERVER_CERTIFICATE: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_SERVER_KEY_EXCHANGE: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_CERTIFICATE_REQUEST: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_SERVER_HELLO_DONE: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_CLIENT_CERTIFICATE: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_CLIENT_KEY_EXCHANGE: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_CERTIFICATE_VERIFY: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_CLIENT_CHANGE_CIPHER_SPEC: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_CLIENT_FINISHED: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_SERVER_CHANGE_CIPHER_SPEC: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static readonly HS_SERVER_FINISHED: sun.security.ssl.HandshakeStateManager$HandshakeState
                public static values(): sun.security.ssl.HandshakeStateManager$HandshakeState[]
                public static valueOf(arg0: java.lang.String | string): sun.security.ssl.HandshakeStateManager$HandshakeState
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}