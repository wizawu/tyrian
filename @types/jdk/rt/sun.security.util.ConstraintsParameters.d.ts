declare namespace sun {
    namespace security {
        namespace util {
            class ConstraintsParameters {
                public constructor(arg0: java.security.cert.X509Certificate, arg1: boolean, arg2: java.util.Date, arg3: java.security.Timestamp, arg4: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.security.AlgorithmParameters, arg2: java.security.Key, arg3: java.lang.String | string)
                public constructor(arg0: java.security.cert.X509Certificate)
                public constructor(arg0: java.security.Timestamp)
                public getAlgorithm(): string
                public getAlgParams(): java.security.AlgorithmParameters
                public getPublicKey(): java.security.Key
                public isTrustedMatch(): boolean
                public getCertificate(): java.security.cert.X509Certificate
                public getPKIXParamDate(): java.util.Date
                public getJARTimestamp(): java.security.Timestamp
                public getVariant(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}