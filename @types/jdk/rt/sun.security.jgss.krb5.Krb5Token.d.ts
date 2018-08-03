declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                abstract class Krb5Token extends sun.security.jgss.GSSToken {
                    public static readonly AP_REQ_ID: int
                    public static readonly AP_REP_ID: int
                    public static readonly ERR_ID: int
                    public static readonly MIC_ID: int
                    public static readonly WRAP_ID: int
                    public static readonly MIC_ID_v2: int
                    public static readonly WRAP_ID_v2: int
                    public static OID: sun.security.util.ObjectIdentifier
                    public static getTokenName(arg0: int): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}