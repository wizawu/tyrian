declare namespace java {
  namespace awt {
    namespace desktop {

      class OpenFilesEvent extends java.awt.desktop.FilesEvent {
        readonly searchTerm: java.lang.String
        public constructor(arg0: java.util.List<java.io.File>, arg1: java.lang.String)
        public getSearchTerm(): java.lang.String
      }

    }
  }
}
