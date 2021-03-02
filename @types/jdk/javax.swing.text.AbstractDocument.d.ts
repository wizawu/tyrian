declare namespace javax {
  namespace swing {
    namespace text {

      abstract class AbstractDocument implements javax.swing.text.Document, java.io.Serializable {
        protected listenerList: javax.swing.event.EventListenerList
        protected static readonly BAD_LOCATION: java.lang.String
        public static readonly ParagraphElementName: java.lang.String
        public static readonly ContentElementName: java.lang.String
        public static readonly SectionElementName: java.lang.String
        public static readonly BidiElementName: java.lang.String
        public static readonly ElementNameAttribute: java.lang.String
        static readonly I18NProperty: java.lang.String
        static readonly MultiByteProperty: java.lang.Object
        static readonly AsyncLoadPriority: java.lang.String
        protected constructor(arg0: javax.swing.text.AbstractDocument$Content)
        protected constructor(arg0: javax.swing.text.AbstractDocument$Content, arg1: javax.swing.text.AbstractDocument$AttributeContext)
        public getDocumentProperties(): java.util.Dictionary<java.lang.Object,java.lang.Object>
        public setDocumentProperties(arg0: java.util.Dictionary<java.lang.Object,java.lang.Object>): void
        protected fireInsertUpdate(arg0: javax.swing.event.DocumentEvent): void
        protected fireChangedUpdate(arg0: javax.swing.event.DocumentEvent): void
        protected fireRemoveUpdate(arg0: javax.swing.event.DocumentEvent): void
        protected fireUndoableEditUpdate(arg0: javax.swing.event.UndoableEditEvent): void
        public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
        public getAsynchronousLoadPriority(): int
        public setAsynchronousLoadPriority(arg0: int): void
        public setDocumentFilter(arg0: javax.swing.text.DocumentFilter): void
        public getDocumentFilter(): javax.swing.text.DocumentFilter
        public render(arg0: java.lang.Runnable): void
        public getLength(): int
        public addDocumentListener(arg0: javax.swing.event.DocumentListener): void
        public removeDocumentListener(arg0: javax.swing.event.DocumentListener): void
        public getDocumentListeners(): javax.swing.event.DocumentListener[]
        public addUndoableEditListener(arg0: javax.swing.event.UndoableEditListener): void
        public removeUndoableEditListener(arg0: javax.swing.event.UndoableEditListener): void
        public getUndoableEditListeners(): javax.swing.event.UndoableEditListener[]
        public getProperty(arg0: java.lang.Object): java.lang.Object
        public putProperty(arg0: java.lang.Object, arg1: java.lang.Object): void
        public remove(arg0: int, arg1: int): void
        handleRemove(arg0: int, arg1: int): void
        public replace(arg0: int, arg1: int, arg2: java.lang.String, arg3: javax.swing.text.AttributeSet): void
        public insertString(arg0: int, arg1: java.lang.String, arg2: javax.swing.text.AttributeSet): void
        public getText(arg0: int, arg1: int): java.lang.String
        public getText(arg0: int, arg1: int, arg2: javax.swing.text.Segment): void
        public createPosition(arg0: int): javax.swing.text.Position
        public getStartPosition(): javax.swing.text.Position
        public getEndPosition(): javax.swing.text.Position
        public getRootElements(): javax.swing.text.Element[]
        public abstract getDefaultRootElement(): javax.swing.text.Element
        public getBidiRootElement(): javax.swing.text.Element
        static isLeftToRight(arg0: javax.swing.text.Document, arg1: int, arg2: int): boolean
        public abstract getParagraphElement(arg0: int): javax.swing.text.Element
        protected getAttributeContext(): javax.swing.text.AbstractDocument$AttributeContext
        protected insertUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent, arg1: javax.swing.text.AttributeSet): void
        protected removeUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
        protected postRemoveUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
        updateBidi(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
        public dump(arg0: java.io.PrintStream): void
        protected getContent(): javax.swing.text.AbstractDocument$Content
        protected createLeafElement(arg0: javax.swing.text.Element, arg1: javax.swing.text.AttributeSet, arg2: int, arg3: int): javax.swing.text.Element
        protected createBranchElement(arg0: javax.swing.text.Element, arg1: javax.swing.text.AttributeSet): javax.swing.text.Element
        protected getCurrentWriter(): java.lang.Thread
        protected writeLock(): void
        protected writeUnlock(): void
        public readLock(): void
        public readUnlock(): void
      }

    }
  }
}
