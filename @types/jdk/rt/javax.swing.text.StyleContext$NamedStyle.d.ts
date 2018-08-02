declare namespace javax {
    namespace swing {
        namespace text {
class StyleContext$NamedStyle implements javax.swing.text.Style , java.io.Serializable {
    protected listenerList: javax.swing.event.EventListenerList
    protected changeEvent: javax.swing.event.ChangeEvent
    public constructor(arg0: javax.swing.text.StyleContext, arg1: java.lang.String | string, arg2: javax.swing.text.Style)
    public constructor(arg0: javax.swing.text.StyleContext, arg1: javax.swing.text.Style)
    public constructor(arg0: javax.swing.text.StyleContext)
    public toString(): string
    public getName(): string
    public setName(arg0: java.lang.String | string): void
    public addChangeListener(arg0: javax.swing.event.ChangeListener): void
    public removeChangeListener(arg0: javax.swing.event.ChangeListener): void
    public getChangeListeners(): javax.swing.event.ChangeListener[]
    protected fireStateChanged(): void
    public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    public getAttributeCount<T extends java.util.EventListener>(): int
    public isDefined<T extends java.util.EventListener>(arg0: java.lang.Object): boolean
    public isEqual<T extends java.util.EventListener>(arg0: javax.swing.text.AttributeSet): boolean
    public copyAttributes<T extends java.util.EventListener>(): javax.swing.text.AttributeSet
    public getAttribute<T extends java.util.EventListener>(arg0: java.lang.Object): java.lang.Object
    public getAttributeNames<T extends java.util.EventListener>(): java.util.Enumeration<any>
    public containsAttribute<T extends java.util.EventListener>(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public containsAttributes<T extends java.util.EventListener>(arg0: javax.swing.text.AttributeSet): boolean
    public getResolveParent<T extends java.util.EventListener>(): javax.swing.text.AttributeSet
    public addAttribute<T extends java.util.EventListener>(arg0: java.lang.Object, arg1: java.lang.Object): void
    public addAttributes<T extends java.util.EventListener>(arg0: javax.swing.text.AttributeSet): void
    public removeAttribute<T extends java.util.EventListener>(arg0: java.lang.Object): void
    public removeAttributes<T extends java.util.EventListener>(arg0: java.util.Enumeration<any>): void
    public removeAttributes<T extends java.util.EventListener>(arg0: javax.swing.text.AttributeSet): void
    public setResolveParent<T extends java.util.EventListener>(arg0: javax.swing.text.AttributeSet): void
    public static class: java.lang.Class<any>
}

        }
    }
}