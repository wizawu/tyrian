declare namespace com {
    namespace sun {
        namespace beans {
            namespace decoder {
                abstract class ElementHandler {
                    public constructor()
                    public getOwner(): com.sun.beans.decoder.DocumentHandler
                    public getParent(): com.sun.beans.decoder.ElementHandler
                    protected getVariable(arg0: java.lang.String | string): java.lang.Object
                    protected getContextBean(): java.lang.Object
                    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    public startElement(): void
                    public endElement(): void
                    public addCharacter(arg0: char): void
                    protected addArgument(arg0: java.lang.Object): void
                    protected isArgument(): boolean
                    protected abstract getValueObject(): com.sun.beans.decoder.ValueObject
                    public static class: java.lang.Class<any>
                }
                interface ElementHandler$$Lambda {
                    (): com.sun.beans.decoder.ValueObject
                }
            }
        }
    }
}