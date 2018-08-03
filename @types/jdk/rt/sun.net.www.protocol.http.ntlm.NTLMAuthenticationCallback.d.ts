declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    namespace ntlm {
                        abstract class NTLMAuthenticationCallback {
                            public constructor()
                            public static setNTLMAuthenticationCallback(arg0: sun.net.www.protocol.http.ntlm.NTLMAuthenticationCallback | sun.net.www.protocol.http.ntlm.NTLMAuthenticationCallback$$Lambda): void
                            public static getNTLMAuthenticationCallback(): sun.net.www.protocol.http.ntlm.NTLMAuthenticationCallback
                            public abstract isTrustedSite(arg0: java.net.URL): boolean
                            public static class: java.lang.Class<any>
                        }
                        interface NTLMAuthenticationCallback$$Lambda {
                            (arg0: java.net.URL): boolean
                        }
                    }
                }
            }
        }
    }
}