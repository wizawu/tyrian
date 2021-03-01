declare namespace java {
  namespace awt {

    class Desktop {

      public static getDesktop(): java.awt.Desktop
      public static isDesktopSupported(): boolean
      public isSupported(arg0: java.awt.Desktop$Action): boolean
      public open(arg0: java.io.File): void
      public edit(arg0: java.io.File): void
      public print(arg0: java.io.File): void
      public browse(arg0: java.net.URI): void
      public mail(): void
      public mail(arg0: java.net.URI): void
      public addAppEventListener(arg0: java.awt.desktop.SystemEventListener): void
      public removeAppEventListener(arg0: java.awt.desktop.SystemEventListener): void
      public setAboutHandler(arg0: java.awt.desktop.AboutHandler): void
      public setPreferencesHandler(arg0: java.awt.desktop.PreferencesHandler): void
      public setOpenFileHandler(arg0: java.awt.desktop.OpenFilesHandler): void
      public setPrintFileHandler(arg0: java.awt.desktop.PrintFilesHandler): void
      public setOpenURIHandler(arg0: java.awt.desktop.OpenURIHandler): void
      public setQuitHandler(arg0: java.awt.desktop.QuitHandler): void
      public setQuitStrategy(arg0: java.awt.desktop.QuitStrategy): void
      public enableSuddenTermination(): void
      public disableSuddenTermination(): void
      public requestForeground(arg0: boolean): void
      public openHelpViewer(): void
      public setDefaultMenuBar(arg0: javax.swing.JMenuBar): void
      public browseFileDirectory(arg0: java.io.File): void
      public moveToTrash(arg0: java.io.File): boolean
    }

  }
}
