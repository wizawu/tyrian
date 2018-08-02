declare namespace sun {
    namespace security {
        namespace util {
            class ManifestDigester {
                public static MF_MAIN_ATTRS: string
                public constructor(arg0: byte[])
                public get(arg0: java.lang.String | string, arg1: boolean): sun.security.util.ManifestDigester$Entry
                public manifestDigest(arg0: java.security.MessageDigest): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}