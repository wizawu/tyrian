declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
interface State extends java.lang.Cloneable {
    updateState(arg0: java.security.cert.X509Certificate): void
    clone(): java.lang.Object
    isInitial(): boolean
    keyParamsNeeded(): boolean
}

            }
        }
    }
}