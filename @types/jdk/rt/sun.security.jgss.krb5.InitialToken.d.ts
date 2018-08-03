declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                abstract class InitialToken extends sun.security.jgss.krb5.Krb5Token {
                    public abstract encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                interface InitialToken$$Lambda extends sun.security.jgss.krb5.Krb5Token {
                    (): byte[]
                }
            }
        }
    }
}