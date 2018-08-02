declare namespace java {
    namespace awt {
class JobAttributes implements java.lang.Cloneable {
    public constructor()
    public constructor(arg0: java.awt.JobAttributes)
    public constructor(arg0: int, arg1: java.awt.JobAttributes$DefaultSelectionType, arg2: java.awt.JobAttributes$DestinationType, arg3: java.awt.JobAttributes$DialogType, arg4: java.lang.String | string, arg5: int, arg6: int, arg7: java.awt.JobAttributes$MultipleDocumentHandlingType, arg8: int[][], arg9: java.lang.String | string, arg10: java.awt.JobAttributes$SidesType)
    public clone(): java.lang.Object
    public set(arg0: java.awt.JobAttributes): void
    public getCopies(): int
    public setCopies(arg0: int): void
    public setCopiesToDefault(): void
    public getDefaultSelection(): java.awt.JobAttributes$DefaultSelectionType
    public setDefaultSelection(arg0: java.awt.JobAttributes$DefaultSelectionType): void
    public getDestination(): java.awt.JobAttributes$DestinationType
    public setDestination(arg0: java.awt.JobAttributes$DestinationType): void
    public getDialog(): java.awt.JobAttributes$DialogType
    public setDialog(arg0: java.awt.JobAttributes$DialogType): void
    public getFileName(): string
    public setFileName(arg0: java.lang.String | string): void
    public getFromPage(): int
    public setFromPage(arg0: int): void
    public getMaxPage(): int
    public setMaxPage(arg0: int): void
    public getMinPage(): int
    public setMinPage(arg0: int): void
    public getMultipleDocumentHandling(): java.awt.JobAttributes$MultipleDocumentHandlingType
    public setMultipleDocumentHandling(arg0: java.awt.JobAttributes$MultipleDocumentHandlingType): void
    public setMultipleDocumentHandlingToDefault(): void
    public getPageRanges(): int[][]
    public setPageRanges(arg0: int[][]): void
    public getPrinter(): string
    public setPrinter(arg0: java.lang.String | string): void
    public getSides(): java.awt.JobAttributes$SidesType
    public setSides(arg0: java.awt.JobAttributes$SidesType): void
    public setSidesToDefault(): void
    public getToPage(): int
    public setToPage(arg0: int): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}