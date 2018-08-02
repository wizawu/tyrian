declare namespace javax {
    namespace xml {
        namespace crypto {
            class OctetStreamData implements javax.xml.crypto.Data {
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: java.lang.String | string)
                public getOctetStream(): java.io.InputStream
                public getURI(): string
                public getMimeType(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}