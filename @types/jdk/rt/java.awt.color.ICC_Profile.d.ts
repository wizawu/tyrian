declare namespace java {
    namespace awt {
        namespace color {
class ICC_Profile implements java.io.Serializable {
    public static CLASS_INPUT: int
    public static CLASS_DISPLAY: int
    public static CLASS_OUTPUT: int
    public static CLASS_DEVICELINK: int
    public static CLASS_COLORSPACECONVERSION: int
    public static CLASS_ABSTRACT: int
    public static CLASS_NAMEDCOLOR: int
    public static icSigXYZData: int
    public static icSigLabData: int
    public static icSigLuvData: int
    public static icSigYCbCrData: int
    public static icSigYxyData: int
    public static icSigRgbData: int
    public static icSigGrayData: int
    public static icSigHsvData: int
    public static icSigHlsData: int
    public static icSigCmykData: int
    public static icSigCmyData: int
    public static icSigSpace2CLR: int
    public static icSigSpace3CLR: int
    public static icSigSpace4CLR: int
    public static icSigSpace5CLR: int
    public static icSigSpace6CLR: int
    public static icSigSpace7CLR: int
    public static icSigSpace8CLR: int
    public static icSigSpace9CLR: int
    public static icSigSpaceACLR: int
    public static icSigSpaceBCLR: int
    public static icSigSpaceCCLR: int
    public static icSigSpaceDCLR: int
    public static icSigSpaceECLR: int
    public static icSigSpaceFCLR: int
    public static icSigInputClass: int
    public static icSigDisplayClass: int
    public static icSigOutputClass: int
    public static icSigLinkClass: int
    public static icSigAbstractClass: int
    public static icSigColorSpaceClass: int
    public static icSigNamedColorClass: int
    public static icPerceptual: int
    public static icRelativeColorimetric: int
    public static icMediaRelativeColorimetric: int
    public static icSaturation: int
    public static icAbsoluteColorimetric: int
    public static icICCAbsoluteColorimetric: int
    public static icSigHead: int
    public static icSigAToB0Tag: int
    public static icSigAToB1Tag: int
    public static icSigAToB2Tag: int
    public static icSigBlueColorantTag: int
    public static icSigBlueMatrixColumnTag: int
    public static icSigBlueTRCTag: int
    public static icSigBToA0Tag: int
    public static icSigBToA1Tag: int
    public static icSigBToA2Tag: int
    public static icSigCalibrationDateTimeTag: int
    public static icSigCharTargetTag: int
    public static icSigCopyrightTag: int
    public static icSigCrdInfoTag: int
    public static icSigDeviceMfgDescTag: int
    public static icSigDeviceModelDescTag: int
    public static icSigDeviceSettingsTag: int
    public static icSigGamutTag: int
    public static icSigGrayTRCTag: int
    public static icSigGreenColorantTag: int
    public static icSigGreenMatrixColumnTag: int
    public static icSigGreenTRCTag: int
    public static icSigLuminanceTag: int
    public static icSigMeasurementTag: int
    public static icSigMediaBlackPointTag: int
    public static icSigMediaWhitePointTag: int
    public static icSigNamedColor2Tag: int
    public static icSigOutputResponseTag: int
    public static icSigPreview0Tag: int
    public static icSigPreview1Tag: int
    public static icSigPreview2Tag: int
    public static icSigProfileDescriptionTag: int
    public static icSigProfileSequenceDescTag: int
    public static icSigPs2CRD0Tag: int
    public static icSigPs2CRD1Tag: int
    public static icSigPs2CRD2Tag: int
    public static icSigPs2CRD3Tag: int
    public static icSigPs2CSATag: int
    public static icSigPs2RenderingIntentTag: int
    public static icSigRedColorantTag: int
    public static icSigRedMatrixColumnTag: int
    public static icSigRedTRCTag: int
    public static icSigScreeningDescTag: int
    public static icSigScreeningTag: int
    public static icSigTechnologyTag: int
    public static icSigUcrBgTag: int
    public static icSigViewingCondDescTag: int
    public static icSigViewingConditionsTag: int
    public static icSigChromaticityTag: int
    public static icSigChromaticAdaptationTag: int
    public static icSigColorantOrderTag: int
    public static icSigColorantTableTag: int
    public static icHdrSize: int
    public static icHdrCmmId: int
    public static icHdrVersion: int
    public static icHdrDeviceClass: int
    public static icHdrColorSpace: int
    public static icHdrPcs: int
    public static icHdrDate: int
    public static icHdrMagic: int
    public static icHdrPlatform: int
    public static icHdrFlags: int
    public static icHdrManufacturer: int
    public static icHdrModel: int
    public static icHdrAttributes: int
    public static icHdrRenderingIntent: int
    public static icHdrIlluminant: int
    public static icHdrCreator: int
    public static icHdrProfileID: int
    public static icTagType: int
    public static icTagReserved: int
    public static icCurveCount: int
    public static icCurveData: int
    public static icXYZNumberX: int
    protected finalize(): void
    public static getInstance(arg0: byte[]): java.awt.color.ICC_Profile
    public static getInstance(arg0: int): java.awt.color.ICC_Profile
    public static getInstance(arg0: java.lang.String | string): java.awt.color.ICC_Profile
    public static getInstance(arg0: java.io.InputStream): java.awt.color.ICC_Profile
    public getMajorVersion(): int
    public getMinorVersion(): int
    public getProfileClass(): int
    public getColorSpaceType(): int
    public getPCSType(): int
    public write(arg0: java.lang.String | string): void
    public write(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public getData(): byte[]
    public getData(arg0: int): byte[]
    public setData(arg0: int, arg1: byte[]): void
    public getNumComponents(): int
    protected readResolve(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}