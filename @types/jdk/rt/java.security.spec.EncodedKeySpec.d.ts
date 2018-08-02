declare namespace java {
    namespace security {
        namespace spec {
            abstract class EncodedKeySpec implements java.security.spec.KeySpec {
                public constructor(arg0: byte[])
                public getEncoded(): byte[]
                public getFormat(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}