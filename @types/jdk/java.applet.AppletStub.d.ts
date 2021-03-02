declare namespace java {
  namespace applet {

    interface AppletStub {
      isActive(): boolean
      getDocumentBase(): java.net.URL
      getCodeBase(): java.net.URL
      getParameter(arg0: java.lang.String): java.lang.String
      getAppletContext(): java.applet.AppletContext
      appletResize(arg0: int, arg1: int): void
    }

  }
}
