declare namespace javax {
    namespace imageio {
        namespace spi {
abstract class ImageReaderWriterSpi extends javax.imageio.spi.IIOServiceProvider {
    protected names: java.lang.String[]
    protected suffixes: java.lang.String[]
    protected MIMETypes: java.lang.String[]
    protected pluginClassName: string
    protected supportsStandardStreamMetadataFormat: boolean
    protected nativeStreamMetadataFormatName: string
    protected nativeStreamMetadataFormatClassName: string
    protected extraStreamMetadataFormatNames: java.lang.String[]
    protected extraStreamMetadataFormatClassNames: java.lang.String[]
    protected supportsStandardImageMetadataFormat: boolean
    protected nativeImageMetadataFormatName: string
    protected nativeImageMetadataFormatClassName: string
    protected extraImageMetadataFormatNames: java.lang.String[]
    protected extraImageMetadataFormatClassNames: java.lang.String[]
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[], arg3: java.lang.String[], arg4: java.lang.String[], arg5: java.lang.String | string, arg6: boolean, arg7: java.lang.String | string, arg8: java.lang.String | string, arg9: java.lang.String[], arg10: java.lang.String[], arg11: boolean, arg12: java.lang.String | string, arg13: java.lang.String | string, arg14: java.lang.String[], arg15: java.lang.String[])
    public constructor()
    public getFormatNames(): java.lang.String[]
    public getFileSuffixes(): java.lang.String[]
    public getMIMETypes(): java.lang.String[]
    public getPluginClassName(): string
    public isStandardStreamMetadataFormatSupported(): boolean
    public getNativeStreamMetadataFormatName(): string
    public getExtraStreamMetadataFormatNames(): java.lang.String[]
    public isStandardImageMetadataFormatSupported(): boolean
    public getNativeImageMetadataFormatName(): string
    public getExtraImageMetadataFormatNames(): java.lang.String[]
    public getStreamMetadataFormat(arg0: java.lang.String | string): javax.imageio.metadata.IIOMetadataFormat
    public getImageMetadataFormat(arg0: java.lang.String | string): javax.imageio.metadata.IIOMetadataFormat
    public static class: java.lang.Class<any>
}

        }
    }
}