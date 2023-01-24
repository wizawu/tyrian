declare namespace java {
  namespace awt {
    namespace desktop {
      class OpenURIEvent extends java.awt.desktop.AppEvent {
        readonly uri: java.net.URI
        public constructor(arg0: java.net.URI)
        public getURI(): java.net.URI
      }
    }
  }
}
