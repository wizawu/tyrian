declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                abstract class CramMD5Base {
                    protected completed: boolean
                    protected aborted: boolean
                    protected pw: byte[]
                    protected static logger: java.util.logging.Logger
                    protected constructor()
                    public getMechanismName(): string
                    public isComplete(): boolean
                    public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                    public dispose(): void
                    protected clearPassword(): void
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}