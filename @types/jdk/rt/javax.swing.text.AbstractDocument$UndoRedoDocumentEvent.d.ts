declare namespace javax {
    namespace swing {
        namespace text {
            class AbstractDocument$UndoRedoDocumentEvent implements javax.swing.event.DocumentEvent {
                public constructor(arg0: javax.swing.text.AbstractDocument, arg1: javax.swing.text.AbstractDocument$DefaultDocumentEvent, arg2: boolean)
                public getSource(): javax.swing.text.AbstractDocument$DefaultDocumentEvent
                public getOffset(): int
                public getLength(): int
                public getDocument(): javax.swing.text.Document
                public getType(): javax.swing.event.DocumentEvent$EventType
                public getChange(arg0: javax.swing.text.Element): javax.swing.event.DocumentEvent$ElementChange
                public static class: java.lang.Class<any>
            }
        }
    }
}