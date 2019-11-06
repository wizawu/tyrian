declare namespace javax {
    namespace swing {
        namespace text {
            abstract class AbstractDocument implements javax.swing.text.Document , java.io.Serializable {
                protected listenerList: javax.swing.event.EventListenerList
                protected static readonly BAD_LOCATION: string
                public static readonly ParagraphElementName: string
                public static readonly ContentElementName: string
                public static readonly SectionElementName: string
                public static readonly BidiElementName: string
                public static readonly ElementNameAttribute: string
                protected constructor(arg0: javax.swing.text.AbstractDocument$Content)
                protected constructor(arg0: javax.swing.text.AbstractDocument$Content, arg1: javax.swing.text.AbstractDocument$AttributeContext)
                public getDocumentProperties(): java.util.Dictionary<java.lang.Object, java.lang.Object>
                public setDocumentProperties(arg0: java.util.Dictionary<java.lang.Object, java.lang.Object>): void
                protected fireInsertUpdate(arg0: javax.swing.event.DocumentEvent): void
                protected fireChangedUpdate(arg0: javax.swing.event.DocumentEvent): void
                protected fireRemoveUpdate(arg0: javax.swing.event.DocumentEvent): void
                protected fireUndoableEditUpdate(arg0: javax.swing.event.UndoableEditEvent): void
                public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
                public getAsynchronousLoadPriority<T extends java.util.EventListener>(): int
                public setAsynchronousLoadPriority<T extends java.util.EventListener>(arg0: int): void
                public setDocumentFilter<T extends java.util.EventListener>(arg0: javax.swing.text.DocumentFilter): void
                public getDocumentFilter<T extends java.util.EventListener>(): javax.swing.text.DocumentFilter
                public render<T extends java.util.EventListener>(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public getLength<T extends java.util.EventListener>(): int
                public addDocumentListener<T extends java.util.EventListener>(arg0: javax.swing.event.DocumentListener): void
                public removeDocumentListener<T extends java.util.EventListener>(arg0: javax.swing.event.DocumentListener): void
                public getDocumentListeners<T extends java.util.EventListener>(): javax.swing.event.DocumentListener[]
                public addUndoableEditListener<T extends java.util.EventListener>(arg0: javax.swing.event.UndoableEditListener | javax.swing.event.UndoableEditListener$$Lambda): void
                public removeUndoableEditListener<T extends java.util.EventListener>(arg0: javax.swing.event.UndoableEditListener | javax.swing.event.UndoableEditListener$$Lambda): void
                public getUndoableEditListeners<T extends java.util.EventListener>(): javax.swing.event.UndoableEditListener[]
                public getProperty<T extends java.util.EventListener>(arg0: java.lang.Object): java.lang.Object
                public putProperty<T extends java.util.EventListener>(arg0: java.lang.Object, arg1: java.lang.Object): void
                public remove<T extends java.util.EventListener>(arg0: int, arg1: int): void
                public replace<T extends java.util.EventListener>(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: javax.swing.text.AttributeSet): void
                public insertString<T extends java.util.EventListener>(arg0: int, arg1: java.lang.String | string, arg2: javax.swing.text.AttributeSet): void
                public getText<T extends java.util.EventListener>(arg0: int, arg1: int): string
                public getText<T extends java.util.EventListener>(arg0: int, arg1: int, arg2: javax.swing.text.Segment): void
                public createPosition<T extends java.util.EventListener>(arg0: int): javax.swing.text.Position
                public getStartPosition<T extends java.util.EventListener>(): javax.swing.text.Position
                public getEndPosition<T extends java.util.EventListener>(): javax.swing.text.Position
                public getRootElements<T extends java.util.EventListener>(): javax.swing.text.Element[]
                public abstract getDefaultRootElement<T extends java.util.EventListener>(): javax.swing.text.Element
                public getBidiRootElement<T extends java.util.EventListener>(): javax.swing.text.Element
                public abstract getParagraphElement<T extends java.util.EventListener>(arg0: int): javax.swing.text.Element
                protected getAttributeContext<T extends java.util.EventListener>(): javax.swing.text.AbstractDocument$AttributeContext
                protected insertUpdate<T extends java.util.EventListener>(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent, arg1: javax.swing.text.AttributeSet): void
                protected removeUpdate<T extends java.util.EventListener>(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
                protected postRemoveUpdate<T extends java.util.EventListener>(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
                public dump<T extends java.util.EventListener>(arg0: java.io.PrintStream): void
                protected getContent<T extends java.util.EventListener>(): javax.swing.text.AbstractDocument$Content
                protected createLeafElement<T extends java.util.EventListener>(arg0: javax.swing.text.Element, arg1: javax.swing.text.AttributeSet, arg2: int, arg3: int): javax.swing.text.Element
                protected createBranchElement<T extends java.util.EventListener>(arg0: javax.swing.text.Element, arg1: javax.swing.text.AttributeSet): javax.swing.text.Element
                protected getCurrentWriter<T extends java.util.EventListener>(): java.lang.Thread
                protected writeLock<T extends java.util.EventListener>(): void
                protected writeUnlock<T extends java.util.EventListener>(): void
                public readLock<T extends java.util.EventListener>(): void
                public readUnlock<T extends java.util.EventListener>(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}