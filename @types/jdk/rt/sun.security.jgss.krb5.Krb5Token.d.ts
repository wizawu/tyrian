declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                abstract class Krb5Token extends sun.security.jgss.GSSToken {
                    public static AP_REQ_ID: int
                    public static AP_REP_ID: int
                    public static ERR_ID: int
                    public static MIC_ID: int
                    public static WRAP_ID: int
                    public static MIC_ID_v2: int
                    public static WRAP_ID_v2: int
                    public static OID: sun.security.util.ObjectIdentifier
                    public static getTokenName(arg0: int): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}