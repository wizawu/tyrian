declare namespace java {
  namespace awt {

    class JobAttributes implements java.lang.Cloneable {
      public constructor()
      public constructor(arg0: java.awt.JobAttributes)
      public constructor(arg0: number | java.lang.Integer, arg1: java.awt.JobAttributes$DefaultSelectionType, arg2: java.awt.JobAttributes$DestinationType, arg3: java.awt.JobAttributes$DialogType, arg4: java.lang.String | string, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: java.awt.JobAttributes$MultipleDocumentHandlingType, arg8: int[][], arg9: java.lang.String | string, arg10: java.awt.JobAttributes$SidesType)
      public clone(): java.lang.Object
      public set(arg0: java.awt.JobAttributes): void
      public getCopies(): number
      public setCopies(arg0: number | java.lang.Integer): void
      public setCopiesToDefault(): void
      public getDefaultSelection(): java.awt.JobAttributes$DefaultSelectionType
      public setDefaultSelection(arg0: java.awt.JobAttributes$DefaultSelectionType): void
      public getDestination(): java.awt.JobAttributes$DestinationType
      public setDestination(arg0: java.awt.JobAttributes$DestinationType): void
      public getDialog(): java.awt.JobAttributes$DialogType
      public setDialog(arg0: java.awt.JobAttributes$DialogType): void
      public getFileName(): java.lang.String
      public setFileName(arg0: java.lang.String | string): void
      public getFromPage(): number
      public setFromPage(arg0: number | java.lang.Integer): void
      public getMaxPage(): number
      public setMaxPage(arg0: number | java.lang.Integer): void
      public getMinPage(): number
      public setMinPage(arg0: number | java.lang.Integer): void
      public getMultipleDocumentHandling(): java.awt.JobAttributes$MultipleDocumentHandlingType
      public setMultipleDocumentHandling(arg0: java.awt.JobAttributes$MultipleDocumentHandlingType): void
      public setMultipleDocumentHandlingToDefault(): void
      public getPageRanges(): number[][]
      public setPageRanges(arg0: int[][]): void
      public getPrinter(): java.lang.String
      public setPrinter(arg0: java.lang.String | string): void
      public getSides(): java.awt.JobAttributes$SidesType
      public setSides(arg0: java.awt.JobAttributes$SidesType): void
      public setSidesToDefault(): void
      public getToPage(): number
      public setToPage(arg0: number | java.lang.Integer): void
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }

  }
}
