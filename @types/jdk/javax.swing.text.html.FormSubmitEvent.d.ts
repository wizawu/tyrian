declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        class FormSubmitEvent extends javax.swing.text.html.HTMLFrameHyperlinkEvent {
          constructor(
            arg0: java.lang.Object | any,
            arg1: javax.swing.event.HyperlinkEvent$EventType,
            arg2: java.net.URL,
            arg3: javax.swing.text.Element,
            arg4: java.lang.String | string,
            arg5: javax.swing.text.html.FormSubmitEvent$MethodType,
            arg6: java.lang.String | string
          )
          public getMethod(): javax.swing.text.html.FormSubmitEvent$MethodType
          public getData(): java.lang.String
        }
      }
    }
  }
}
