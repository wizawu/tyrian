declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
                class MockAttributeSet implements javax.swing.text.AttributeSet , javax.swing.text.MutableAttributeSet {
                    public backing: java.util.Dictionary<java.lang.Object, java.lang.Object>
                    public isEmpty(): boolean
                    public getAttributeCount(): int
                    public isDefined(arg0: java.lang.Object): boolean
                    public isEqual(arg0: javax.swing.text.AttributeSet): boolean
                    public copyAttributes(): javax.swing.text.AttributeSet
                    public getAttribute(arg0: java.lang.Object): java.lang.Object
                    public addAttribute(arg0: java.lang.Object, arg1: java.lang.Object): void
                    public addAttributes(arg0: javax.swing.text.AttributeSet): void
                    public removeAttribute(arg0: java.lang.Object): void
                    public removeAttributes(arg0: javax.swing.text.AttributeSet): void
                    public removeAttributes(arg0: java.util.Enumeration<any>): void
                    public setResolveParent(arg0: javax.swing.text.AttributeSet): void
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