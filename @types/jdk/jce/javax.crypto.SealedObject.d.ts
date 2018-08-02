declare namespace javax {
    namespace crypto {
        class SealedObject implements java.io.Serializable {
            protected encodedParams: byte[]
            public constructor(arg0: java.io.Serializable, arg1: javax.crypto.Cipher)
            protected constructor(arg0: javax.crypto.SealedObject)
            public getAlgorithm(): string
            public getObject(arg0: java.security.Key): java.lang.Object
            public getObject(arg0: javax.crypto.Cipher): java.lang.Object
            public getObject(arg0: java.security.Key, arg1: java.lang.String | string): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}