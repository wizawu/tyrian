declare namespace javax {
    namespace swing {
        namespace event {
class HyperlinkEvent extends java.util.EventObject {
    public constructor(arg0: java.lang.Object, arg1: javax.swing.event.HyperlinkEvent$EventType, arg2: java.net.URL)
    public constructor(arg0: java.lang.Object, arg1: javax.swing.event.HyperlinkEvent$EventType, arg2: java.net.URL, arg3: java.lang.String | string)
    public constructor(arg0: java.lang.Object, arg1: javax.swing.event.HyperlinkEvent$EventType, arg2: java.net.URL, arg3: java.lang.String | string, arg4: javax.swing.text.Element)
    public constructor(arg0: java.lang.Object, arg1: javax.swing.event.HyperlinkEvent$EventType, arg2: java.net.URL, arg3: java.lang.String | string, arg4: javax.swing.text.Element, arg5: java.awt.event.InputEvent)
    public getEventType(): javax.swing.event.HyperlinkEvent$EventType
    public getDescription(): string
    public getURL(): java.net.URL
    public getSourceElement(): javax.swing.text.Element
    public getInputEvent(): java.awt.event.InputEvent
    public static class: java.lang.Class<any>
}

        }
    }
}