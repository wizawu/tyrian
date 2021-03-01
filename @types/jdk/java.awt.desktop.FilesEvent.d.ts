declare namespace java {
  namespace awt {
    namespace desktop {

      class FilesEvent extends java.awt.desktop.AppEvent {

        readonly files: java.util.List<java.io.File>
        constructor(arg0: java.util.List<java.io.File>)
        public getFiles(): java.util.List<java.io.File>
      }

    }
  }
}
