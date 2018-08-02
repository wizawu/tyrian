declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class MuxingAttributeSet implements javax.swing.text.AttributeSet , java.io.Serializable {
                    public constructor(arg0: javax.swing.text.AttributeSet[])
                    protected constructor()
                    protected setAttributes(arg0: javax.swing.text.AttributeSet[]): void
                    protected getAttributes(): javax.swing.text.AttributeSet[]
                    protected insertAttributeSetAt(arg0: javax.swing.text.AttributeSet, arg1: int): void
                    protected removeAttributeSetAt(arg0: int): void
                    public getAttributeCount(): int
                    public isDefined(arg0: java.lang.Object): boolean
                    public isEqual(arg0: javax.swing.text.AttributeSet): boolean
                    public copyAttributes(): javax.swing.text.AttributeSet
                    public getAttribute(arg0: java.lang.Object): java.lang.Object
                    public getAttributeNames(): java.util.Enumeration
                    public containsAttribute(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                    public containsAttributes(arg0: javax.swing.text.AttributeSet): boolean
                    public getResolveParent(): javax.swing.text.AttributeSet
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}