declare namespace javax {
    namespace swing {
        namespace text {
            abstract class AbstractDocument$AbstractElement implements javax.swing.text.Element , javax.swing.text.MutableAttributeSet , java.io.Serializable , javax.swing.tree.TreeNode {
                public constructor(arg0: javax.swing.text.AbstractDocument, arg1: javax.swing.text.Element, arg2: javax.swing.text.AttributeSet)
                public dump(arg0: java.io.PrintStream, arg1: int): void
                public getAttributeCount(): int
                public isDefined(arg0: java.lang.Object): boolean
                public isEqual(arg0: javax.swing.text.AttributeSet): boolean
                public copyAttributes(): javax.swing.text.AttributeSet
                public getAttribute(arg0: java.lang.Object): java.lang.Object
                public getAttributeNames(): java.util.Enumeration<any>
                public containsAttribute(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public containsAttributes(arg0: javax.swing.text.AttributeSet): boolean
                public getResolveParent(): javax.swing.text.AttributeSet
                public addAttribute(arg0: java.lang.Object, arg1: java.lang.Object): void
                public addAttributes(arg0: javax.swing.text.AttributeSet): void
                public removeAttribute(arg0: java.lang.Object): void
                public removeAttributes(arg0: java.util.Enumeration<any>): void
                public removeAttributes(arg0: javax.swing.text.AttributeSet): void
                public setResolveParent(arg0: javax.swing.text.AttributeSet): void
                public getDocument(): javax.swing.text.Document
                public getParentElement(): javax.swing.text.Element
                public getAttributes(): javax.swing.text.AttributeSet
                public getName(): string
                public abstract getStartOffset(): int
                public abstract getEndOffset(): int
                public abstract getElement(arg0: int): javax.swing.text.Element
                public abstract getElementCount(): int
                public abstract getElementIndex(arg0: int): int
                public abstract isLeaf(): boolean
                public getChildAt(arg0: int): javax.swing.tree.TreeNode
                public getChildCount(): int
                public getParent(): javax.swing.tree.TreeNode
                public getIndex(arg0: javax.swing.tree.TreeNode): int
                public abstract getAllowsChildren(): boolean
                public abstract children(): java.util.Enumeration
                public static class: java.lang.Class<any>
            }
        }
    }
}