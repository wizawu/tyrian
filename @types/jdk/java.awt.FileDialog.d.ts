declare namespace java {
  namespace awt {

    class FileDialog extends java.awt.Dialog {
      public static readonly LOAD: int
      public static readonly SAVE: int
      mode: int
      dir: java.lang.String
      file: java.lang.String
      filter: java.io.FilenameFilter
      public constructor(arg0: java.awt.Frame)
      public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string)
      public constructor(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: number | java.lang.Integer)
      public constructor(arg0: java.awt.Dialog)
      public constructor(arg0: java.awt.Dialog, arg1: java.lang.String | string)
      public constructor(arg0: java.awt.Dialog, arg1: java.lang.String | string, arg2: number | java.lang.Integer)
      public setTitle(arg0: java.lang.String | string): void
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getMode(): number
      public setMode(arg0: number | java.lang.Integer): void
      public getDirectory(): java.lang.String
      public setDirectory(arg0: java.lang.String | string): void
      public getFile(): java.lang.String
      public getFiles(): java.io.File[]
      public setFile(arg0: java.lang.String | string): void
      public setMultipleMode(arg0: boolean | java.lang.Boolean): void
      public isMultipleMode(): boolean
      public getFilenameFilter(): java.io.FilenameFilter
      public setFilenameFilter(arg0: java.io.FilenameFilter | java.io.FilenameFilter$$lambda): void
      protected paramString(): java.lang.String
      postsOldMouseEvents(): boolean
    }

  }
}
