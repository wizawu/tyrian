declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    namespace ntlm {
                        abstract class NTLMAuthenticationCallback {
                            public constructor()
                            public static setNTLMAuthenticationCallback(arg0: sun.net.www.protocol.http.ntlm.NTLMAuthenticationCallback): void
                            public static getNTLMAuthenticationCallback(): sun.net.www.protocol.http.ntlm.NTLMAuthenticationCallback
                            public isTrustedSite(arg0: java.net.URL): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}