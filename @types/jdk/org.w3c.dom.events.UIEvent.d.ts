declare namespace org {
  namespace w3c {
    namespace dom {
      namespace events {
        interface UIEvent extends org.w3c.dom.events.Event {
          getView(): org.w3c.dom.views.AbstractView
          getDetail(): number
          initUIEvent(
            arg0: java.lang.String | string,
            arg1: boolean | java.lang.Boolean,
            arg2: boolean | java.lang.Boolean,
            arg3: org.w3c.dom.views.AbstractView | org.w3c.dom.views.AbstractView$$lambda,
            arg4: number | java.lang.Integer
          ): void
        }
      }
    }
  }
}
