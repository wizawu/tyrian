declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                class MTOMFeature extends javax.xml.ws.WebServiceFeature {
                    public static ID: string
                    protected threshold: int
                    public constructor()
                    public constructor(arg0: boolean)
                    public constructor(arg0: int)
                    public constructor(arg0: boolean, arg1: int)
                    public getID(): string
                    public getThreshold(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}