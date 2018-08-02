declare namespace javax {
    namespace swing {
        namespace text {
class DefaultStyledDocument$ElementBuffer implements java.io.Serializable {
    public constructor(arg0: javax.swing.text.DefaultStyledDocument, arg1: javax.swing.text.Element)
    public getRootElement(): javax.swing.text.Element
    public insert(arg0: int, arg1: int, arg2: javax.swing.text.DefaultStyledDocument$ElementSpec[], arg3: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
    public remove(arg0: int, arg1: int, arg2: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
    public change(arg0: int, arg1: int, arg2: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
    protected insertUpdate(arg0: javax.swing.text.DefaultStyledDocument$ElementSpec[]): void
    protected removeUpdate(): void
    protected changeUpdate(): void
    public clone(arg0: javax.swing.text.Element, arg1: javax.swing.text.Element): javax.swing.text.Element
    public static class: java.lang.Class<any>
}

        }
    }
}