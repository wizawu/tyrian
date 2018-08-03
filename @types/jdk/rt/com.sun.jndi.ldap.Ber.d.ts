declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                abstract class Ber {
                    protected buf: byte[]
                    protected offset: int
                    protected bufsize: int
                    public static readonly ASN_BOOLEAN: int
                    public static readonly ASN_INTEGER: int
                    public static readonly ASN_BIT_STRING: int
                    public static readonly ASN_SIMPLE_STRING: int
                    public static readonly ASN_OCTET_STR: int
                    public static readonly ASN_NULL: int
                    public static readonly ASN_OBJECT_ID: int
                    public static readonly ASN_SEQUENCE: int
                    public static readonly ASN_SET: int
                    public static readonly ASN_PRIMITIVE: int
                    public static readonly ASN_UNIVERSAL: int
                    public static readonly ASN_CONSTRUCTOR: int
                    public static readonly ASN_APPLICATION: int
                    public static readonly ASN_CONTEXT: int
                    public static readonly ASN_PRIVATE: int
                    public static readonly ASN_ENUMERATED: int
                    protected constructor()
                    public static dumpBER(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string, arg2: byte[], arg3: int, arg4: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}